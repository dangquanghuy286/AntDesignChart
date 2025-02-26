// Import các hook cần thiết từ React
import { useEffect, useState } from "react";

// Import component Line từ thư viện @ant-design/plots để vẽ biểu đồ đường
import { Line } from "@ant-design/plots";

// Định nghĩa component BasicLine để hiển thị biểu đồ
function StepLine() {
    // Khai báo state để lưu dữ liệu biểu đồ, mặc định là một mảng rỗng
    const [dataChart, setDataChart] = useState([]);

    // useEffect chạy một lần sau khi component render để fetch dữ liệu từ API
    useEffect(() => {
        fetch("http://localhost:3001/line-month") // Gửi request GET đến API
            .then(res => res.json()) // Chuyển đổi response thành JSON
            .then(data => {
                setDataChart(data); // Cập nhật state với dữ liệu nhận được
            });
    }, []); // Dependency array rỗng => chỉ chạy một lần khi component mount

    console.log(dataChart); // In dữ liệu ra console để kiểm tra

    // Cấu hình biểu đồ, xác định trục x, trục y và dữ liệu
    const config = {
        data: dataChart, // Dữ liệu biểu đồ lấy từ state
        xField: "date",  // Trục X là ngày tháng
        yField: "quantity", // Trục Y là số lượng


    };


    // JSX để render tiêu đề và biểu đồ
    return (
        <>
            <h2>Step Line</h2>
            <Line  {...config} /> {/* Hiển thị biểu đồ với config đã cấu hình */}
        </>
    );
}

// Xuất component để có thể import vào file khác
export default StepLine;
