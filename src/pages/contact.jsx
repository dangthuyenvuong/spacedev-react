import React, { useState } from 'react'
import Input from '../components/Input'

export default function Contact() {
    const [form, setForm] = useState({})
    const [error, setError] = useState({})

    const onSubmit = (ev) => {
        ev.preventDefault()
        
        const errorObject = {}
        // validate form

        if(!form.name?.trim()) {
            errorObject.name = 'Please fill in this field'
        }
        if(!form.phone?.trim()) {
            errorObject.phone = 'Please fill in this field'
        }else if(!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
            errorObject.phone = 'please enter phone number'
        }
        if(form.website && !/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(form.website)) {
            errorObject.website = 'please enter website address'
        }

        if(!form.email?.trim()) {
            errorObject.email = 'Please fill in this field'
        }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
            errorObject.email = 'please enter email address'
        }
        if(!form.title?.trim()) {
            errorObject.title = 'Please fill in this field'
        }
        if(!form.content?.trim()) {
            errorObject.content = 'Please fill in this field'
        }

        setError(errorObject)

        if(Object.keys(errorObject).length === 0) {
            console.log('Validate success')
        }else {
            console.log('Validate error')
        }
    }

    const register = (name) => {
        return {
            error: error[name],
            value: form[name] || '',
            onChange: (ev) => setForm({...form, [name]: ev.target.value}) 
        }
    }

    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger">
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <a href="./" className="logo">
                        <img src="img/logo.svg" alt="" />
                        <h1>Spacedev</h1>
                    </a>
                    <div className="right">
                        <div className="have-login">
                            <div className="account">
                                <a href="./profile.html" className="info">
                                    <div className="name">Đặng Thuyền Vương</div>
                                    <div className="avatar">
                                        <img src="img/avt.png" alt="" />
                                    </div>
                                </a>
                            </div>
                            <div className="hamberger">
                            </div>
                            <div className="sub">
                                <a href="#">Khóa học của tôi</a>
                                <a href="#">Thông tin tài khoản</a>
                                <a href="#">Đăng xuất</a>
                            </div>
                        </div>
                        {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">Đăng ký / Đăng nhập</a>
                    </li>
                    <li className="active">
                        <a href="./">Trang chủ</a>
                    </li>
                    <li>
                        <a href="./team.html">Spacedev Team</a>
                    </li>
                    <li>
                        <a href="./course-list.html">Khóa Học</a>
                    </li>
                    <li>
                        <a href="./project.html">Dự Án</a>
                    </li>
                    <li>
                        <a href="./contact.html">Liên hệ</a>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" />
            <main className="register-course" id="main">
                <section className="section-1 wrap container">
                    {/* <div class="main-sub-title">liên hệ</div> */}
                    <h2 className="main-title">HỢP TÁC CÙNG Spacedev</h2>
                    <p className="top-des">
                        Đừng ngần ngại liên hệ với <strong>Spacedev</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
                        việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
                    </p>
                    <form className="form" onSubmit={onSubmit}>
                        <Input label="Họ và tên" required placeholder="Họ và tên bạn" {...register('name')}/>
                        <Input label="Số điện thoại" required placeholder="Số điện thoại" {...register('phone')}/>
                        <Input label="Email" required placeholder="Email của bạn" {...register('email')}/>
                        <Input label="Website" placeholder="Đường dẫn website http://" {...register('website')}/>
                        <Input label="Tiêu đề" required placeholder="Tiêu đề liên hệ" {...register('title')}/>
                        <Input label="Nội dung" required renderInput={(props) => <textarea cols={30} rows={10} {...props}/>} {...register('content')}/>
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
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 left">
                            <p className="des">
                                Sáng tạo, tinh tế và phù hợp sẽ khiến
                                sản phẩm của bạn trở nên khác biệt.
                            </p>
                            <p className="address">
                                Tòa nhà Robot, 308, Điện Biên Phủ, Phường 4, Quận 3, TP. Hồ Chí Minh
                            </p>
                            <p className="phone">(+84) 98 9596 913</p>
                            <div className="social">
                                <a href="#">
                                    <img src="img/fb-icon.png" alt="" />
                                </a>
                                <a href="#">
                                    <img src="img/email-icon.png" alt="" />
                                </a>
                                <a href="#">
                                    <img src="img/skype-icon.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="right">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="./">Trang chủ</a>
                                    </li>
                                    <li>
                                        <a href="./course-list.html">Khóa Học</a>
                                    </li>
                                    <li>
                                        <a href="#">Thanh toán</a>
                                    </li>
                                    <li>
                                        <a href="#">Điều khoản</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <a href="#" className="back-to-top">
                        <div className="line" />
                        CUỘN LÊN
                    </a>
                </div>
                <div className="copy-right">
                    <div className="container">
                        <p>2020 spacedev.vn</p>
                        <p>Được thiết kế và lập trình bởi Spacedev Team</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
