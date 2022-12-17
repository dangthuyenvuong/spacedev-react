import React, { useLayoutEffect } from 'react'
import { useId } from 'react'
import { useRef, useEffect, useState } from 'react'
import { Input } from '../components/Input'
import { useForm } from '@/hooks/useForm'
import Button from '@/components/Button'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { useAuth } from '@/context/AuthContext'

const fibonaci = (n) => {
    console.log('expensiveCalculation')
    if (n < 3) return 1
    return fibonaci(n - 2) + fibonaci(n - 1)
}

export const DemoReact = () => {
    const [render, renderCount] = useState(0)
    useEffect(() => {
        const timerId = setInterval(() => {
            renderCount(render => render + 1)
        }, 100)
        return () => {
            clearInterval(timerId)
        }
    }, [])


    const [count, setCount] = useState(0)

    const value = useMemo(() => fibonaci(count), [count])
    const onIncre = useCallback(() => setCount(prev => prev + 1), [])



    return (
        <main className="register-course">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">Số lần  render: {renderRef.current}</h2>
                Count: {count} <br />
                Fibonaci: {value} <br />
                <Button onClick={onIncre}>+1</Button>

            </section>
        </main>
    )
}


/**
 * memo: memorize 1 component, khi props thay đổi thì component re-render
 * 
 * equalFun: Hàm so sánh, return true nếu newProps === oldProps và không re-render
 * Sử dụng equalFun khi chỉ muốn component re-render trong một vài props thay đổi
 */

/**
 * useMemo: memorize value sau khi được tính toán phức tạp
 * 
 * Khi chúng ta có một logic tính toán phức tạp tốn nhiều tài nguyên, mỗi lần component re-render làm cho việc tính toán đc thực thi lại
 * thì sử dụng useMemo để cache giá trị tính toán đó lại
 * 
 * Khi re-render xẩy ra, giá trị chỉ được tính toán lại khi có sự thay đổi của dependencyList
 */

/**
 * useCallback: momerize 1 function
 * 
 * Khi component re-render, function sẽ được tạo mới gây vô hiệu hóa những component sử dụng React.memo --> Sử dụng khi component con có sử dụng React.memo
 * 
 * Sử dụng useCallback và useMemo cho Provider value tránh việc re-render những component con sử dụng khi không cần thiết
 * 
 */




// useEffect: setState -> return (render UI) -> ( useEffect (setState) -> return (render UI) ) x 50


/**
 * Bạn sẽ gây ra 1 event (thay đổi state/props, re-render từ component cha,...)
 * Return component.
 * Màn hình UI được cập nhật.
 * Chạy useEffect.
 */

// useLayoutEffect: setState -> return (ko render UI) -> ( useLayoutEffect (setState) -> return (ko render UI) ) x 50 -> return (render UI)

/**
 * Bạn sẽ gây ra 1 event (thay đổi state/props, re-render từ component cha,...)
 * Return component.
 * Chạy useLayoutEffect, và react sẽ đợi đến khi nào nó hoàn thành.
 * Màn hình UI được cập nhật.
 * 
 * 
 * Không nên sử dụng useLayoutEffect thay cho useEffect vì useLayoutEffect sẽ block render UI trước khi thực hiện xong side effect
 * Chỉ sử dụng khi cần thiết
 */



