import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class SocketClientService implements OnModuleInit, OnModuleDestroy {
  constructor(private readonly eventEmit: EventEmitter2) {}

  private socket: Socket;

  onModuleInit() {
    this.connectToServer();
  }

  connectToServer() {
    // Replace with the correct URL of your server
    this.socket = io(process.env.URI_SOCKET_BE);

    // Manually connect to the server
    this.socket.connect();

    // Listen for connection event
    this.socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    this.socket.on('status-boss', () => {
      this.eventEmit.emitAsync('start.bot.client');
    });

    // Handle disconnection
    this.socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
  }

  sendMessageToServer(room: string, message: string) {
    if (!this.socket.connected) {
      this.socket.connect();
    }
    this.socket.emit(room, message);
  }

  onModuleDestroy() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
