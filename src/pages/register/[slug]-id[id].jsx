import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Field from '../../components/Field'
import { useForm } from '../../hooks/useForm'
import { courseService } from '../../services/course.service'
import { regexp, required } from '../../utils/validate'
import { currency } from '../../utils/currency'
import { useScrollTop } from '../../hooks/useScrollTop'
import { useFetch } from '../../hooks/useFetch'
export default function Register() {
    const { id } = useParams()
    const {data: detail, loading} = useFetch(() => courseService.getCourseDetail(id))
    // const [detail, setDetail] = useState()
    useScrollTop([id])

    // useEffect(() => {
    //     let course = courseService.getCourseDetail(parseInt(id))
    //     setDetail(course)
    // }, [id])

    const { register, validate, values } = useForm({
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
        fb: [
            required(),
            regexp(/(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/,
                'Xin vui lòng nhập đúng địa chỉ facebook')
        ],
    })
    const [isSuccess, setIsSuccess] = useState(false)

    const onSubmit = () => {
        if (validate()) {
            setIsSuccess(true)
        } else {
            console.log('Validate error')
        }
    }

    if (!detail) return <div style={{margin: '100px 0'}}>...Not Found...</div>

    return (
        <main className="register-course" id="main">
            {
                isSuccess ? (
                    <div className="register-success" style={{ margin: '40px auto' }}>
                        <div className="contain">
                            <div className="main-title">đăng ký thành công</div>
                            <p>
                                <strong>Chào mừng {values.name} đã trở thành thành viên mới của Spacedev Team.</strong> <br />
                                Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                                hoặc số điện thoại của bạn.
                            </p>
                        </div>
                        <a href="/" className="btn main rect">về trang chủ</a>
                    </div>
                ) : (
                    <section>
                        <div className="container">
                            <div className="wrap container">
                                <div className="main-sub-title">ĐĂNG KÝ</div>
                                <h1 className="main-title">{detail.title}</h1>
                                <div className="main-info">
                                    <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                                    <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                                    <div className="time"><strong>Học phí:</strong> {currency(detail.money)} VND</div>
                                </div>
                                <div className="form">
                                    <Field label="Họ và tên" required placeholder="Họ và tên bạn" {...register('name')} />
                                    <Field label="Số điện thoại" required placeholder="Số điện thoại" {...register('phone')} />
                                    <Field label="Email" required placeholder="Email của bạn" {...register('email')} />
                                    <Field label="URL Facebook" placeholder="URL Facebook" {...register('fb')} />
                                    <Field label="Ý kiến cá nhân" placeholder="Mong muốn cá nhân và lịch bạn có thể học." renderInput={(props) => <textarea cols={30} rows={10} {...props} />} {...register('content')} />
                                    <Field
                                        {...register('coin')}
                                        label="Sử dụng COIN"
                                        renderInput={(props) => (
                                            <div className="checkcontainer">
                                                Hiện có <strong>300 COIN</strong>
                                                {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                                {/* Cần ít nhất 200 COIN để giảm giá */}
                                                <input {...props} onChange={ev => setForm({ ...form, coin: ev.target.checked })} checked={props.value} type="checkbox" />
                                                <span className="checkmark" />
                                            </div>
                                        )}
                                    />
                                    <Field
                                        label="Hình thức thanh toán"
                                        renderInput={() => (
                                            <div className="select">
                                                <div className="head">Chuyển khoản</div>
                                                <div className="sub">
                                                    <a href="#">Chuyển khoản</a>
                                                    <a href="#">Thanh toán tiền mặt</a>
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <button onClick={onSubmit} className="btn main rect">đăng ký</button>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }


        </main>
    )
}
