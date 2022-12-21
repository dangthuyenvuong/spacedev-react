# Redux

- Redux là thư viện quảy lý state dùng cho các dự án Javascript

- `store`: redux store dùng để quản lý global state

- `subscribe`: Lắng nghe sự thay đổi của state, khi state thay đổi redux sẽ thực thi hàm callback

- `dispatch`: Hàm trigger 1 event, input là 1 plan object theo quy định: 
     `type`: Tên của action
     `payload`: data nếu có

- `useSelector`: Lấy giá trị từ trong store, truyền vào `selectorFn` để selector đúng giá trị cần lấy

- `useDispatch`: Lấy ra hàm dispatch

- 1 store duy nhất, nhiều reducer, mỗi reducer chỉ quản lý những dữ liệu liên quan reducer đó

- function `reducer`: 

    - Mỗi reducer sẽ quản lý 1 phần dữ liệu của store

    - Khi dispatch, tất cả reducer sẽ được kích hoạt
 
    - reducer cần return về một giá trị, giá trị sẽ được cập nhật vào store. Trong trường hợp return về state cũ, redux sẽ không cần re-render lại
 State là `plan object`, không lưu function