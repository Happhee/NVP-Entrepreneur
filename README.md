# NVP-Entrepreneur

# 🖥  프로젝트명 
Nfc + Vaccine Pass (사업자용)

# 🖥 프로젝트 개요
> 안심콜로 인증을 하는 가게에서는 백신패스를 확인하기 위해서 직원이 **직접**확인을 해야한다.
이는 상당한 불편을 초래하고 있다.  이 때문에, 정부는 현재 선 통화 이후 별도로 문자 메시지 등으로 백신정보를 확인해주는 시스템을 구축하려고 있다. 하지만 시스템 구축 비용 등의 문제로 인해 협상이 이루어지지 않고 있다. 
  따라서 우리는 **간편백신패스 인증 시스템 ** 인
  ### NVP
  을 구현하고자 한다.
  
 # 🖥 사업자 주요기능
 > - 회원가입시 사업자 정확한 등록번호 입력 (공공데이터 API)
 > - 회원가입시, 사업자 등록증 카메라 문서 인식
 > - Nfc 태그에 사업자의 가게 정보 등록
 
 
  # 🖥 예상 UI
  
 ## 사업자
![](https://images.velog.io/images/seohee0112/post/a3fe23bb-3f30-4ba0-9c7a-5565aa8c071f/image.png)

# 🖥 기술 흐름도 - 사업자
회원가입시, 사업자의 여러가지 정보를 공공데이터 Api를 통해 올바른 데이터만을 서버에 저장하도록 구현한다.
이후 , nfc기능을 설정할때 해당 사업자의 정보를 서버로부터 받아와서 핸드폰을 통해 nfc스티커로 정보를 전달하여 백신패스 스티커를 만든다.

![image](https://user-images.githubusercontent.com/79238676/149600166-4bc124ac-bbd2-40da-8c46-f5ce8ab1f30c.png)


# 🖥 NFC 기술
nfc라는 비접촉식 통신 기술을 도입해 복잡한 페어링이나 블루투스처럼 별도의 기기간 설정 없이 빠르게 인식이 가능하다. 
양방향 통신이라는 점을 이용해 사업자나 사용자 모두 상황에 따라 태그와 리더의 기능을 할 수 있다. 
따라서 nfc접촉 시 스마트폰의 nfc기능이 켜있어야 하지만 삼성페이와 같이 어플에 접속하면 자동으로 nfc가 켜지도록 기능을 구현한다.
또한, 처음 어플을 실행시에 개인 및 사업자는 nfc태그 기능을 어플에 필수로 등록하며, 활성화된 태그 기능으로 태그 시 상호인증을 통한 방문데이터를 저장한다.

![image](https://user-images.githubusercontent.com/79238676/149599736-16b36fbf-2763-443f-82c9-244841bb202d.png)


# 🖥 실제 적용된 NFC 상호 인식 기술
1. 개인의 정보가(백신패스) 담긴 NFC 태그의 기능을 NVP 버튼을 눌러 활성화 시킴
2. 만약 등록된 태그 기능이 있고 로그인 토큰이 유효하다면, 앱 실행시 자동으로 nfc기능이 활성화
3. 사업자의 정보가 담긴 NFC 태그 스티커에 개인의 휴대폰을 접촉
4. 정보의 상호교환이 가능하며, 방문기록을 자동으로 서버에 전송

![image](https://user-images.githubusercontent.com/79238676/149598769-df3b6f5c-87a5-4471-a0a2-a367e17c95d4.png)


