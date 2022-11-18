import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ProfileLayout() {
    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src="/img/avt.png" alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">Vương Đặng</div>
                    <p className="des">Thành viên của team Spacedev1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <a onClick={(ev) => onChangeTab(ev, 0)} href="#" className="active">Thông tin tài khoản</a>
                            <a onClick={(ev) => onChangeTab(ev, 1)} href="#">Khóa học của bạn</a>
                            <a onClick={(ev) => onChangeTab(ev, 2)} href="#">Dự án đã làm</a>
                            <a onClick={(ev) => onChangeTab(ev, 3)} href="#">Lịch sử thanh toán</a>
                            <a onClick={(ev) => onChangeTab(ev, 4)} href="#">Quản lý COIN của tôi</a>
                        </div>
                        <div className="tab-content">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
