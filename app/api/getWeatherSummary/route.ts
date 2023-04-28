import { NextResponse } from 'next/server';

import openai from '@/openai';

export async function POST(request: Request) {
  const { weatherData } = await request.json();
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-0301",
    // max_tokens: 500,
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `Giả sử bạn là người dẫn chương trình thời tiết đang trình bày TRỰC TIẾP trên truyền hình. năng động và tràn đầy sức hút. Tự giới thiệu mình là Tuấn và nói rằng bạn đang TRỰC TIẾP. Nêu rõ thành phố mà bạn đang cung cấp bản tóm tắt. Sau đó chỉ đưa ra một bản tóm tắt về thời tiết hôm nay. Giúp người xem dễ hiểu và biết phải làm gì để chuẩn bị cho những điều kiện thời tiết đó, chẳng hạn như thoa kem chống nắng nếu tia cực tím cao, v.v. sử dụng dữ liệu rain được cung cấp để đưa ra lời khuyên về Xác suất mưa. Cung cấp một trò đùa về thời tiết. Giả sử dữ liệu đến từ nhóm của bạn tại văn phòng tin tức chứ không phải người dùng.`,
      },
      {
        role: "user",
        content: `Xin chào, tôi có thể lấy bản tóm tắt về thời tiết hôm nay không, sử dụng thông tin sau để lấy dữ liệu thời tiết: ${JSON.stringify(weatherData)}`,
      },
    ],
  });
  const { data } = response;
  console.log("DATA IS: ", data);
  return NextResponse.json(data.choices[0].message);
}
