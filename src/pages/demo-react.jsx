import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react'
import Button from '../components/Button'
import { Input } from '../components/Input';

export const DemoReact = () => {
    const ref = useRef(0)
    const firstInputRef = useRef()
    const [,setRandom] = useState()

    useEffect(() => {
        setInterval(() => {
            console.log(ref.current);
            ref.current++
        }, 1000)
    }, [])

    useEffect(() => {
        firstInputRef.current.focus()
    }, [])
    const onSubmit = () => {
        const formData = new FormData(ref.current);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);
    }
    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">HỢP TÁC CÙNG Spacedev</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>Spacedev</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
                    việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
                </p>
                <form className="form" onSubmit={onSubmit}>
                    <label>
                        <p>Họ và tên<span>*</span></p>
                        <input type="text" name="name" placeholder="Họ và tên bạn" />
                    </label>
                    <label>
                        <p>Số điện thoại</p>
                        {/* <input type="text" name="phone" placeholder="Số điện thoại" /> */}
                        <Input ref={firstInputRef} name="phone" placeholder="Số điện thoại" />
                    </label>
                    <label>
                        <p>Email<span>*</span></p>
                        <input type="text" name="email" placeholder="Email của bạn" />
                    </label>
                    <label>
                        <p>Website</p>
                        <input type="text" name="website" placeholder="Đường dẫn website http://" />
                    </label>
                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <input type="text" name="title" placeholder="Tiêu đề liên hệ" />
                    </label>
                    <label>
                        <p>Nội dung<span>*</span></p>
                        <textarea name="content" cols={30} rows={10} defaultValue={""} />
                    </label>
                </form>

                <Button className="btn main rect" onClick={onSubmit}>đăng ký</Button>
                COUNT: {ref.current}
                <Button className="btn main rect" onClick={() => setRandom({})}>Update UI</Button>
            </section>
        </main>
    )
}





/**
 * # Ref level 1:
 * - Thường dùng để lấy ra 1 web-component ---> đặt ref vào trong 1 web component muốn lấy
 * - Xem như 1 biến bình thường lưu trữ giá trị, không bị tạo mới mỗi lần re-render ---> Thay đổi ref.current mà không làm re-render component
 * -
 * 
 * # Ref level 2: forwardRef
 * - Làm sao để lấy 1 web component bên trong 1 component ?
 * - Truyền ref vào 1 component, component phải được bọc trong forwardRef, từ component đó sẽ đặt ref vào trong 1 web component mong muốn
 * 
 * # Ref level 3: forwardRef kết hợp userImperativeHandle ---> Trả ra một thể hiện khác của ref
 * - forwardRef vào trong một component, component sẽ sử dụng useImperativeHandle để trả về cho ref những giá trị cần thiết
 */



