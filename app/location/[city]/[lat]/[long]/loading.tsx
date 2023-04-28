import React from 'react';

import { SunIcon } from '@heroicons/react/solid';

SunIcon
function loading() {
  return (
    <div className='bg-gradient-to-br from-[#394F68] to-[#183B7E] min-h-screen flex flex-col items-center justify-center text-slate-500'>
        <SunIcon className='h-24 w-24 animate-bounce text-yellow-500' color='yellow'/>
        <h1 className='text-6xl font-bold text-center mb-10 animate-pulse'>Đang tải thông tin thời tiết của thành phố</h1>
        <h2 className='text-xl font-bold text-center mb-10 animate-pulse'>Vui lòng chờ, chúng tôi đang xử lý số liệu và tạo bản tóm tắt thời tiết bằng trí tuệ nhân tạo</h2>
    </div>
  )
}

export default loading