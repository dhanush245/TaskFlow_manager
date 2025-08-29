import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { trigger, transition, style, animate, state } from '@angular/animations';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isTyping?: boolean;
}

@Component({
  selector: 'app-ai-chat-dialog',
  templateUrl: './ai-chat-dialog.component.html',
  styleUrls: ['./ai-chat-dialog.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('messageSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('typingIndicator', [
      state('typing', style({ opacity: 1 })),
      state('idle', style({ opacity: 0 })),
      transition('idle <=> typing', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class AiChatDialogComponent implements OnInit {
  messages: ChatMessage[] = [];
  newMessage = '';
  isTyping = false;
  aiResponses = [
    "Hey! I'd love to help you with that! 😊",
    "Oh cool! Let me show you how that works!",
    "No worries at all! I got you covered on this one!",
    "That's a great question! Here's the scoop:",
    "Awesome! Let me break this down for you in a simple way!",
    "Totally! I know exactly what you need!",
    "Hey, no problem! Let me walk you through this step by step!",
    "Sweet! I'm here to help you figure this out!",
    "Love that question! Here's what's up:",
    "Perfect! Let me give you the inside scoop on this!"
  ];

  constructor(private dialogRef: MatDialogRef<AiChatDialogComponent>) {}

  ngOnInit(): void {
    // Add welcome message
    this.addMessage('ai', 'Hey there! 👋 I\'m Craze, your friendly AI buddy here to help you rock TaskFlow Manager! What\'s on your mind today? 😄');
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      // Add user message
      this.addMessage('user', this.newMessage);
      const userMessage = this.newMessage;
      this.newMessage = '';
      
      // Show typing indicator
      this.isTyping = true;
      
      // Simulate AI response after a delay
      setTimeout(() => {
        this.isTyping = false;
        const aiResponse = this.generateAiResponse(userMessage);
        this.addMessage('ai', aiResponse);
      }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
    }
  }

  addMessage(sender: 'user' | 'ai', text: string): void {
    const message: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    this.messages.push(message);
  }

  generateAiResponse(userMessage: string): string {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simple keyword-based responses
    if (lowerMessage.includes('task') || lowerMessage.includes('create')) {
      return "Oh, creating tasks is super easy! 🎯 Just head over to the 'Tasks' menu in the sidebar and hit that '+ New Task' button. You can then fill in all the deets like title, description, priority, and who you want to assign it to. Piece of cake! 😊";
    }
    
    if (lowerMessage.includes('dashboard') || lowerMessage.includes('overview')) {
      return "The dashboard is like your command center! 🚀 It shows you a sweet overview of all your tasks, including recent ones, what's still pending, and your completion stats. You'll see progress bars and task status at a glance - super handy for keeping track of everything! 📊";
    }
    
    if (lowerMessage.includes('board') || lowerMessage.includes('kanban')) {
      return "Board View is where the magic happens! ✨ It's like a Kanban board where you can drag and drop tasks between different columns (To Do, In Progress, Completed). Super visual and makes workflow management a breeze! Just click and drag - it's that simple! 🎨";
    }
    
    if (lowerMessage.includes('analytics') || lowerMessage.includes('report')) {
      return "Analytics is your productivity superpower! 📈 It gives you awesome reports and charts about how you're crushing it with your tasks, completion rates, and overall productivity. You can filter by dates and categories to see exactly what you want. Pretty cool, right? 🔥";
    }
    
    if (lowerMessage.includes('settings') || lowerMessage.includes('profile')) {
      return "Your profile and settings are just a click away! 👤 Look for your user menu in the top-right corner (that's where your avatar is). Click on it and you can update your info, change preferences, and tweak your account settings. Easy peasy! ⚙️";
    }
    
    if (lowerMessage.includes('notification') || lowerMessage.includes('alert')) {
      return "Notifications are your best friend! 🔔 Check out that bell icon in the header - that's where all your alerts hang out. You'll get notified about new task assignments, updates, and system messages. Just click the bell to see what's new! 📱";
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return "I'm totally here for you! 🤗 You can ask me about anything in TaskFlow Manager - tasks, dashboard, board view, analytics, you name it! I'm like your personal guide to making the most of this awesome tool. What would you like to know more about? 💪";
    }
    
    if (lowerMessage.includes('logout') || lowerMessage.includes('sign out')) {
      return "Logging out is a breeze! 👋 Just click on your user avatar in the top-right corner, then pick 'Logout' from the dropdown. There's also a logout button in the sidebar if you prefer. See you next time! 👋";
    }
    
    if (lowerMessage.includes('priority') || lowerMessage.includes('urgent')) {
      return "Task priorities are super useful! 🎯 You can set tasks as Low, Medium, or High priority when you create or edit them. High priority tasks get highlighted and show up at the top of your lists - perfect for when you need to focus on what matters most! ⚡";
    }
    
    if (lowerMessage.includes('assign') || lowerMessage.includes('team')) {
      return "Team collaboration is where it's at! 👥 When you create or edit a task, you can assign it to team members using the dropdown. They'll see it in their task list and get notifications. It's like having a virtual high-five system! 🖐️";
    }
    
    // Default response
    return this.aiResponses[Math.floor(Math.random() * this.aiResponses.length)] + 
           " Feel free to ask me about anything - creating tasks, using the dashboard, board view, analytics, settings, notifications, or any other cool feature of TaskFlow Manager! I'm here to make your experience awesome! 🚀";
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  getTimeString(timestamp: Date): string {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
