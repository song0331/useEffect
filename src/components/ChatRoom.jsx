import { useEffect } from 'react';

export default function ChatRoom() {
  useEffect(() => {
    const connection = 연결생성();
    connection.연결();

    return () => {
      connection.연결해제();
    };

  }, []);

  return (
    <h1>웰컴 투 더 채팅!</h1>
  );
}

function 연결생성() {
  return {
    연결() {
      console.log('✅ 서버 연결 중...');
    },
    연결해제() {
      console.log('❌ 서버 연결 해제.');
    }
  };
}