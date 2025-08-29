import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { AiChatDialogComponent } from '../ai-chat-dialog/ai-chat-dialog.component';

@Component({
  selector: 'app-floating-ai-assistant',
  templateUrl: './floating-ai-assistant.component.html',
  styleUrls: ['./floating-ai-assistant.component.scss'],
  animations: [
    trigger('floatAnimation', [
      state('idle', style({
        transform: 'translateY(0px) scale(1)'
      })),
      state('hover', style({
        transform: 'translateY(-8px) scale(1.1)'
      })),
      transition('idle <=> hover', [
        animate('0.3s ease-in-out')
      ])
    ]),
    trigger('pulse', [
      state('pulse', style({
        transform: 'scale(1)'
      })),
      transition('* => pulse', [
        animate('2s ease-in-out', style({
          transform: 'scale(1.2)'
        })),
        animate('2s ease-in-out', style({
          transform: 'scale(1)'
        }))
      ])
    ]),
    trigger('bounce', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px) scale(0.5)' }),
        animate('0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)', style({ 
          opacity: 1, 
          transform: 'translateY(0) scale(1)' 
        }))
      ])
    ])
  ]
})
export class FloatingAiAssistantComponent implements OnInit {
  isHovered = false;
  isPulsing = false;
  showTooltip = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    // Start pulsing animation after 3 seconds
    setTimeout(() => {
      this.isPulsing = true;
    }, 3000);
  }

  openAiChat(): void {
    const dialogRef = this.dialog.open(AiChatDialogComponent, {
      width: '500px',
      maxWidth: '90vw',
      maxHeight: '80vh',
      panelClass: 'ai-chat-dialog-panel',
      disableClose: false,
      autoFocus: false,
      position: {
        bottom: '100px',
        left: '30px'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('AI Chat dialog closed');
    });
  }

  onMouseEnter(): void {
    this.isHovered = true;
    this.showTooltip = true;
  }

  onMouseLeave(): void {
    this.isHovered = false;
    this.showTooltip = false;
  }

  onPulseAnimationDone(): void {
    if (this.isPulsing) {
      // Restart the pulse animation
      this.isPulsing = false;
      setTimeout(() => {
        this.isPulsing = true;
      }, 5000); // Wait 5 seconds before next pulse
    }
  }
}

