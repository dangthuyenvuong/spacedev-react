import React, { useState } from 'react'
import Field from '../components/Input'
import { regexp, required, validate } from '../utils/validate'

export default function Contact() {
    const [form, setForm] = useState({})
    const [error, setError] = useState({})

    const onSubmit = (ev) => {
        ev.preventDefault()

        const errorObject = validate({
            email: [
                required(),
                regexp('email', 'Xin vui lòng nhập đúng Email')
            ],
            phone: [
                required(),
                regexp('phone', 'Xin vui lòng nhập đúng số điện thoại')
            ],
            name: [
                required()
            ],
            website: [
                regexp('url', 'Xin vui lòng nhập đúng địa chỉ website')
            ],
            title: [
                required()
            ],
            content: [
                required('Xin vui lòng nhập nội dung liên hệ')
            ]
        }, form)

        setError(errorObject)

        if (Object.keys(errorObject).length === 0) {
            console.log('Validate success')
        } else {
            console.log('Validate error')
        }
    }

    const register = (name) => {
        return {
            error: error[name],
            value: form[name] || '',
            onChange: (ev) => setForm({ ...form, [name]: ev.target.value })
        }
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
                    <Field label="Họ và tên" required placeholder="Họ và tên bạn" {...register('name')} />
                    <Field label="Số điện thoại" required placeholder="Số điện thoại" {...register('phone')} />
                    <Field label="Email" required placeholder="Email của bạn" {...register('email')} />
                    <Field label="Website" placeholder="Đường dẫn website http://" {...register('website')} />
                    <Field label="Tiêu đề" required placeholder="Tiêu đề liên hệ" {...register('title')} />
                    <Field label="Nội dung" required renderInput={(props) => <textarea cols={30} rows={10} {...props} />} {...register('content')} />
                    {/* <label>
                            <p>Họ và tên<span>*</span></p>
                            <input type="text" placeholder="Họ và tên bạn" />
                        </label> 
                        <label>
                            <p>Số điện thoại</p>
                            <input type="text" placeholder="Số điện thoại" />
                        </label>
                        <label>
                            <p>Email<span>*</span></p>
                            <input type="text" placeholder="Email của bạn" />
                        </label>
                        <label>
                            <p>Website</p>
                            <input type="text" placeholder="Đường dẫn website http://" />
                        </label>
                        <label>
                            <p>Tiêu đề<span>*</span></p>
                            <input type="text" placeholder="Tiêu đề liên hệ" />
                        </label> */}
                    {/* <label>
                            <p>Nội dung<span>*</span></p>
                            <textarea name id cols={30} rows={10} defaultValue={""} />
                        </label> */}
                    <button className="btn main rect" >đăng ký</button>
                </form>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Vương Đặng đã trở thành thành viên mới của Spacedev Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>
    )
}
