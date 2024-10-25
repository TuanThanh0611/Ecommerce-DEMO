import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";
@Component({
    selector: 'app-register',
    imports: [FormsModule],
    templateUrl: './register.component.html',
    standalone: true,
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    registerRequest = {
        email: '',
        password: ''
    };

    constructor(private http: HttpClient, private router: Router) {}

    onSubmit() {
        this.http.post('/auth/regis', this.registerRequest).subscribe(
            (response) => {
                console.log('Đăng ký thành công:', response);
                this.router.navigate(['/login']); // Điều hướng đến trang đăng nhập
            },
            (error) => {
                console.error('Lỗi đăng ký:', error);
                // Có thể hiển thị thông báo lỗi cho người dùng
            }
        );
    }
}