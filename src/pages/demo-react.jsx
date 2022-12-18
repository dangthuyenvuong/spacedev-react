import React, { useLayoutEffect } from 'react'
import { useId } from 'react'
import { useRef, useEffect, useState } from 'react'
import { Input } from '../components/Input'
import { useForm } from '@/hooks/useForm'
import Button from '@/components/Button'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useReducer } from 'react'
import { Count } from '@/components/Count'
import { Count2 } from '@/components/Count2'


export const DemoReact = () => {

    return <Count2 />
}

/**
 * useReducer: Giống như 1 phiên bản nâng cấp của useState, 
 * khi state phức tạp, 
 * nhiều object lồng nhau, 
 * nhiều action thì chúng ta nên sử dụng useReducer để thay thế
 * 
 * @return [dispatch] như một hàm trigger action
 * @param [reducer] function reducer
 * @param [initialState]: Nên là 1 plan object, không chứa function
 * @param [initializer] function initial chỉ thực thi 1 lần duy nhất, giống defaultValue là function của useState
 * 
 * 
 * @note [plan object] là những object được tạo từ {} hoặc Object, không phải function, class. Thuần dữ liệu và không chứa function
 * 
 * 
 * dispatch mặc định không bị dính lỗi stale closure
 * 
 * Cách để viết useReducer tốt hơn:
 * - Sử dụng const để khai báo tên action để tránh viết nhầm tên action
 * - Truyền data thông qua payload action
 * - Tách function reducer, action ra một file để đễ dàng quản lý
 */