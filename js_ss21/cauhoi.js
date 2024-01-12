// Bài 1.Cơ chế hoạt động của JS trên trình duyệt
// JavaScript (JS) là một ngôn ngữ lập trình được thực thi trực tiếp trong trình duyệt web của người dùng. Dưới đây là cơ chế hoạt động cơ bản của JavaScript trong môi trường trình duyệt:
// 1.	Tải HTML và CSS:
// •	Trình duyệt tải trang HTML và CSS từ máy chủ web.
// 2.	Gặp mã JavaScript:
// •	Khi trình duyệt gặp mã JavaScript (bao gồm trong các thẻ <script> hoặc từ các tệp tin ngoại lệ như JavaScript nằm trong các tệp tin .js), quá trình tải HTML tạm dừng và trình duyệt bắt đầu tải và thực thi mã JS.
// 3.	Chuyển đổi và thực thi:
// •	Trình duyệt chuyển đổi mã JavaScript thành mã máy (native code) bằng trình thông dịch (interpreter) hoặc bằng cách sử dụng các công cụ như JIT (Just-In-Time) compiler.
// •	Mã máy này sau đó được thực thi trực tiếp trong môi trường trình duyệt.
// 4.	Tương tác với DOM (Document Object Model):
// •	JavaScript tương tác với DOM để thay đổi cấu trúc, nội dung và kiểu dáng của trang web. DOM là một biểu diễn lập trình của trang HTML, giúp JavaScript thao tác trực tiếp trên trang web.
// 5.	Xử lý sự kiện và kết nối với API:
// •	JavaScript thường được sử dụng để xử lý sự kiện như nhấn nút, di chuyển chuột, hoặc nhập liệu từ người dùng. Khi có sự kiện xảy ra, JavaScript có thể kết nối với API (Application Programming Interface) để thực hiện các tác vụ như gửi yêu cầu HTTP (Ajax), tương tác với cơ sở dữ liệu, và nhiều công việc khác.
// 6.	Cập nhật giao diện người dùng:
// •	JavaScript thường được sử dụng để động đến giao diện người dùng, thay đổi nội dung và kiểu dáng của trang mà không cần tải lại toàn bộ trang.
// 7.	Asynchronous Programming:
// •	JavaScript hỗ trợ lập trình không đồng bộ thông qua các khái niệm như Callbacks, Promises, và Async/Await, giúp xử lý các tác vụ như tải hình ảnh, dữ liệu từ máy chủ mà không làm đóng băng trình duyệt.
// 8.	Web APIs:
// •	Trình duyệt cung cấp các Web APIs như DOM API, XMLHttpRequest, Fetch API, và nhiều API khác để JavaScript tương tác với các tính năng và dịch vụ của trình duyệt và máy chủ.
// Các trình duyệt hiện đại thường có một môi trường thực thi JavaScript mạnh mẽ và tối ưu để cung cấp trải nghiệm web mượt mà và linh hoạt.

// Bài 2. Thế nào là JS Runtime ? cho VD
// JavaScript Runtime là một môi trường thực thi mà mã nguồn JavaScript chạy trong đó. Nó bao gồm các thành phần quan trọng như trình thông dịch (interpreter), bộ thu gom rác (garbage collector), và các thư viện và API để tương tác với môi trường xung quanh, chẳng hạn như DOM API trong trình duyệt.
// Một số Ví dụ của JavaScript Runtime bao gồm:
// 1.	Trình Duyệt (Browser Runtime):
// •	Trong môi trường trình duyệt web, JavaScript Runtime chạy trong trình duyệt của người dùng.
// •	Trình duyệt cung cấp các thành phần như DOM API để tương tác với cấu trúc của trang web, XMLHttpRequest hoặc Fetch API để thực hiện các yêu cầu HTTP, và nhiều API khác.
// 2.	Node.js (Server-Side Runtime):
// •	Node.js là một môi trường runtime cho JavaScript xây dựng dựa trên Chrome's V8 JavaScript engine.
// •	Node.js cho phép JavaScript chạy ở môi trường máy chủ, giúp xây dựng ứng dụng web phía server.
// 3.	React Native (Mobile Runtime):
// •	React Native sử dụng JavaScript để phát triển ứng dụng di động.
// •	JavaScript Runtime trong React Native cung cấp quyền truy cập đến các API của hệ điều hành di động thông qua JavaScript Bridge.
// 4.	Electron (Desktop Runtime):
// •	Electron cho phép việc phát triển ứng dụng desktop bằng cách sử dụng HTML, CSS, và JavaScript.
// •	JavaScript Runtime trong Electron giúp tương tác với API của hệ điều hành và cung cấp quyền truy cập đến các tính năng của máy tính cá nhân.
// Trong mỗi trường hợp, JavaScript Runtime cung cấp một môi trường thực thi đồng nhất cho mã nguồn JavaScript, cho phép nó tương tác với các tài nguyên và tính năng cụ thể của môi trường đó. Điều này giúp JavaScript trở thành một ngôn ngữ đa nền tảng, có thể chạy trên nhiều loại thiết bị và môi trường khác nhau.
// Bài 3. Thế nào là JS engine ? Cho VD


// JavaScript engine là một phần của trình duyệt hoặc môi trường thực thi nơi mã nguồn JavaScript được thực hiện. Chức năng chính của JS engine là chuyển đổi mã nguồn JavaScript thành mã máy (native code) để máy tính có thể thực thi nó. Dưới đây là một số ví dụ về các JavaScript engine phổ biến:
// 1.	V8 (Google Chrome, Node.js):
// •	V8 là một JavaScript engine được phát triển bởi Google, được sử dụng trong trình duyệt Google Chrome và Node.js.
// •	Nó nổi tiếng với hiệu suất cao và có JIT (Just-In-Time) compiler, giúp tối ưu hóa mã nguồn JavaScript thành mã máy.
// 2.	SpiderMonkey (Mozilla Firefox):
// •	SpiderMonkey là JavaScript engine được sử dụng trong trình duyệt Firefox của Mozilla.
// •	Nó cũng hỗ trợ JIT compilation và có nhiều tính năng mở rộng như asm.js để cải thiện hiệu suất.
// 3.	Chakra (Microsoft Edge, Internet Explorer):
// •	Chakra là JavaScript engine được phát triển bởi Microsoft và trước đây được sử dụng trong trình duyệt Internet Explorer. Tuy nhiên, Edge đã chuyển sang sử dụng Chromium và V8 engine.
// •	Chakra có nhiều tính năng đặc biệt như JIT và hỗ trợ Asynchronous JavaScript.
// 4.	JavaScriptCore (WebKit, Safari):
// •	JavaScriptCore (hoặc Nitro) là JavaScript engine của Apple, được sử dụng trong trình duyệt Safari.
// •	Nó có một JIT compiler mạnh mẽ và hỗ trợ nhiều tính năng mới của ngôn ngữ JavaScript.
// 5.	Rhino (Mozilla Rhino):
// •	Rhino là JavaScript engine chạy trên Java Virtual Machine (JVM). Mặc dù đã lỗi thời, nó vẫn được sử dụng trong một số dự án Java.

// Khi bạn thực thi mã JavaScript trong trình duyệt hoặc Node.js, bạn đang sử dụng một JavaScript engine cụ thể để chạy mã đó.

// Bài 4. Thế nào là TDZ(Temperal Dead Zone)


// Temporal Dead Zone (TDZ) là một khái niệm trong JavaScript liên quan đến biến được khai báo bằng let và const. TDZ là một khoảng thời gian từ khi biến được tạo ra (hoisted) đến khi nó được khởi tạo với giá trị ban đầu. Trong khoảng thời gian này, nếu bạn cố gắng truy cập biến, một lỗi sẽ xảy ra.

// TDZ là một cơ chế an toàn để đảm bảo rằng biến được sử dụng chỉ sau khi nó đã được khai báo và khởi tạo. Điều này giúp tránh những lỗi khó debug liên quan đến sử dụng biến trước khi nó được định nghĩa.