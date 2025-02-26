// Import các hook cần thiết từ React
import { useEffect, useState } from "react";

// Import component Line từ thư viện @ant-design/plots để vẽ biểu đồ đường
import { Line } from "@ant-design/plots";

// Định nghĩa component BasicLine để hiển thị biểu đồ
function MultiLine() {
    // Khai báo state để lưu dữ liệu biểu đồ, mặc định là một mảng rỗng
    const [dataChart, setDataChart] = useState([]);

    // useEffect chạy một lần sau khi component render để fetch dữ liệu từ API
    useEffect(() => {
        fetch("http://localhost:3001/type") // Gửi request GET đến API
            .then(res => res.json()) // Chuyển đổi response thành JSON
            .then(data => {
                setDataChart(data); // Cập nhật state với dữ liệu nhận được
            });
    }, []); // Dependency array rỗng => chỉ chạy một lần khi component mount

    console.log(dataChart); // In dữ liệu ra console để kiểm tra

    // Cấu hình biểu đồ, xác định trục x, trục y và dữ liệu
    const config = {
        data: dataChart,
        xField: "year",
        yField: "value",
        seriesField: "category",
        isGroup: true,
        smooth: true,
        point: {
            size: 5,
            shape: "circle",
        },
        interactions: [{ type: "slider", cfg: { start: 0, end: 0.5 } }], // Bật slider
    };



    // JSX để render tiêu đề và biểu đồ
    return (
        <>
            <h2>MultiLine</h2>
            <Line  {...config} /> {/* Hiển thị biểu đồ với config đã cấu hình */}
        </>
    );
}

// Xuất component để có thể import vào file khác
export default MultiLine;
