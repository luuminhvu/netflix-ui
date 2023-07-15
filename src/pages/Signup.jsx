import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/netflix-config';
import styled from 'styled-components';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [fromValues, setFromValues] = useState({ email: '', password: '' });
    const handleSignIn = async () => {
        try {
            const { email, password } = fromValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error);
        }
    };
    onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
            navigate('/');
        }
    });
    return (
        <Container showPassword={showPassword}>
            <BackgroundImage />
            <div className="content">
                <Header login />
                <div className="body flex column a-center j-center">
                    <div className="text flex column">
                        <h1>Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác</h1>
                        <h4>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</h4>
                        <h6>
                            Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.
                        </h6>
                    </div>
                    <div className="form">
                        <input
                            type="email"
                            placeholder="Địa chỉ Email"
                            name="email"
                            value={fromValues.email}
                            onChange={(e) => setFromValues({ ...fromValues, email: e.target.value })}
                        />
                        {showPassword && (
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                name="password"
                                value={fromValues.password}
                                onChange={(e) => setFromValues({ ...fromValues, password: e.target.value })}
                            />
                        )}
                        {!showPassword && <button onClick={() => setShowPassword(true)}>Bắt đầu</button>}
                    </div>

                    {showPassword && <button onClick={handleSignIn}>Đăng Kí</button>}
                </div>
            </div>
        </Container>
    );
};
const Container = styled.div`
    position: relative;
    .content {
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.5);
        display: grid;
        grid-template-rows: 15vh 85vh;
    }
    button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        font-weight: bolder;
        font-size: 1.05rem;
        border-radius: 0.1875rem;
    }
    .body {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
            padding: 0 25rem;
        }
    }
    .form {
        display: flex;
        gap: 1rem;
        input {
            color: white;
            background: transparent;
            padding: 1.5rem;
            font-size: 1.2rem;
            line-height: 1.5rem;
            border: 1px solid #999;
            border-radius: 0.25rem;
            height: 3rem;
            &:focus {
                outline: none;
                border: 3px solid #ebe9e6;
            }
        }
    }
`;

export default Signup;
