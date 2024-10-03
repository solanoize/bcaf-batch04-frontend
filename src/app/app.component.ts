import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'bcaf-0409';

  ngOnInit(): void {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool',
    });
  }

  userComment: string = '<script>alert("XSS Attack!");</script>';
  sanitizedComment: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizedComment = this.sanitizer.bypassSecurityTrustHtml(
      this.userComment
    );
  }
}
