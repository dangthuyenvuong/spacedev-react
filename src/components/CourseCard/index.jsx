import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import { PATH } from '../../config/path'
export default function CourseCard({ thumbnailUrl, title, short_description, slug, id }) {
    const path = generatePath(PATH.courseDetail, { slug, id })
    const registerPath = generatePath(PATH.courseRegister, { slug, id })

    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to={path}>
                    <img src={thumbnailUrl} alt="" />
                </Link>
                <div className="info">
                    <Link className="name" to={path}>
                        {title}
                    </Link>
                    <p className="des">{short_description}</p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">Vương Đặng</div>
                    </div>
                    <Link to={registerPath} className="register-btn">Đăng Ký</Link>
                </div>
            </div>
        </div>
    )
}
