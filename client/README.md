# Hướng dẫn sử dụng API

## Giới thiệu

Ứng dụng này cung cấp một số API để quản lý đăng ký môn học và tài khoản người dùng.

## Cài đặt

1. Clone repository từ GitHub:
2. Cài đặt dependencies bằng yarn hoặc npm(hiện dự án đang dùng yarn):
    ```bash
    yarn
    ```
    hoặc
    ```bash
    npm install
    ```

## Sử dụng

### 1. (Course API)

```javascript
import CourseApi from './path/to/CourseApi'

CourseApi.method(data)
    .then((response) => {
        // Xử lý kết quả thành công
    })
    .catch((error) => {
        // Xử lý lỗi
    })
```

### 2. (User API)

```javascript
import UserApi from './path/to/UserApi'

UserApi.UserLogin(data)
    .then((response) => {
        // Xử lý kết quả thành công
    })
    .catch((error) => {
        // Xử lý lỗi
    })
```

### 3. (Schedule API)

```javascript
import ScheduleApi from './path/to/ScheduleApi'

ScheduleApi.method(data)
    .then((response) => {
        // Xử lý kết quả thành công
    })
    .catch((error) => {
        // Xử lý lỗi
    })
```

Trong hướng dẫn này, thay thế `path/to/` bằng đường dẫn thực tế đến các file API tương ứng.
