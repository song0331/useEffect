import { useEffect, useRef } from 'react';
import './Login.css'

export default function Login() {

  const refId = useRef(null);
  const refPw = useRef(null);

  useEffect(() => {
    refId.current.focus()
    console.log(refId)
  }, [])

  return (
    <div className="login_container">
      <h2 className="login_title">로그인</h2>

      <form action="#">
        <fieldset>
          <legend className="sr_only">로그인</legend>

          <div className="user_id_wrapper">
            <label htmlFor="user_id" className="sr_only">아이디</label>
            <input
              ref={refId}
              type="text"
              id="user_id"
              name="user_id"
              placeholder="아이디를 입력하시오"
              required
              aria-invalid
              aria-describedby="error_id"
              onInput={(e) => {
                let value = e.target.value;
                const userId = document.querySelector('#error_id');
                const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/;
                const isValidPassword = value => pwRegex.test(value);

                if (!value || !isValidPassword(value)) userId.classList.add('is_invalid')
                else userId.classList.remove('is_invalid')
              }}
            />
            <span className="error_message" id="error_id">
              6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합
            </span>
          </div>

          <div className="user_pw_wrapper">
            <label htmlFor="user_pw" className="sr_only">비밀번호</label>
            <input
              ref={refPw}
              type="password"
              id="user_pw"
              name="user_pw"
              placeholder="비밀번호를 입력하시오"
              required
              aria-invalid
              aria-describedby="error_pw"
              onInput={(e) => {
                let value = e.target.value;
                const userPw = document.querySelector('#error_pw');
                const pwRegex = /^(?=.*[A-Za-z\d!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,16}$/;
                const isValidPassword = value => pwRegex.test(value);

                if (!value || !isValidPassword(value)) userPw.classList.add('is_invalid')
                else userPw.classList.remove('is_invalid')
              }}
            />
            <span className="error_message" id="error_pw">
              특수문자 포함 최소 6자 - 최대 16자
            </span>
          </div>

          <div className="user_find_wrapper">
            <a href="#">아이디 찾기</a>
            <span> | </span>
            <a href="#">비밀번호 찾기</a>
          </div>

          <div className="btn_wrapper">
            <button type="submit" className="login_btn" onClick={(e) => {
              e.preventDefault();

              if (refId.current.value === 'minji04') {
                alert(`${refId.current.value} 님, 환영합니다!`);
              } else {
                alert(`잘못된 정보입니다`);
                refId.current.value = '';
                refPw.current.value = '';
                refId.current.focus()
              }

            }}>로그인</button>
            <a href="#" className="register_btn">회원가입</a>
          </div>

        </fieldset>
      </form>

    </div>
  )
}