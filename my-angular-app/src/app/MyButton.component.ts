// src/app/MyButton.component.ts

import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-my-button',
    template: '<button class="my-button">{{ label }}</button>',
    styles: [
        `
        .my-button {
            background-color: #070708;
            color: #fff;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            cursor: pointer;
            border-radius: 12px;
            font-family: 
                
        }
    
        .my-button:hover {
            background-color: #fff;
            color: #070708;
        }
        `,
    ],
})
export class MyButtonComponent {
    @Input() label: string = '';

    onClick(): void {
        console.log("Clickado");
    }

}
