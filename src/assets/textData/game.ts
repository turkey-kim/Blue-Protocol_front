const gameContents = [
  {
    id: '캐릭터',
    content: `커맨드 메뉴 내의 캐릭터 탭에서는 자신의 캐릭터와 클래스에 관한 여러 가지 설정을 확인 및 변경할 수 있습니다.
</br></br>

> **배틀 빌드**
> 

---

<center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697770127054_%C3%AC%C2%BA%C2%90%C3%AB%C2%A6%C2%AD%C3%AD%C2%84%C2%B0%20%C3%AC%C2%8A%C2%A4%C3%AC%C2%83%C2%B7.jpg%7D" width="720"/>

</br></br>
</center>

| 1 | 캐릭터의 기본적인 정보를 확인할 수 있는 정보란입니다. 자신의 캐릭터의 이름과 칭호, 클래스와 레벨, 그리고 배틀 스코어를 확인할 수 있습니다. |
| --- | --- |
| 2 | 캐릭터의 능력치와 공격력 및 방어력, 그리고 최대 체력 및 ST를 확인할 수 있습니다.</br>또한, 방어 항목의 속성 내성치를 눌러 자신의 속성 내성치를 확인할 수도 있습니다. |
| 3 | 클래스/무기 창에서는 캐릭터가 착용하고 있는 무기를 확인 및 변경할 수 있습니다. 블루 프로토콜은 멀티 클래스 게임인 만큼, </br>무기를 변경할 시, 해당 무기를 사용하는 클래스로 자동 변경되게 됩니다.
| 4 | 스킬 단축창에서는 해당 캐릭터가 착용중인 각종 스킬들을 확인 및 교체할 수 있습니다. </br>택티컬 스킬 및 배틀 이매진, ULT 스킬과 베이스 액션의 경우, 키보드에 등록된 스킬의 단축키도 확인할 수 있습니다. |
</br>
각 클래스별 사용 무기는 다음과 같습니다. 

<center>

| <center>![이지스 파이터](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697770869426_%C3%AC%C2%9D%C2%B4%C3%AC%C2%A7%C2%80%C3%AC%C2%8A%C2%A4%C3%AD%C2%8C%C2%8C%C3%AC%C2%9D%C2%B4%C3%AD%C2%84%C2%B0%20%C3%AC%C2%95%C2%84%C3%AC%C2%9D%C2%B4%C3%AC%C2%BD%C2%98.png%7D) <br/> 이지스 파이터 | <center>검과 방패 |
| --- | --- |
| <center> ![트윈 스트라이커](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697770909882_%C3%AD%C2%8A%C2%B8%C3%AC%C2%9C%C2%88%C3%AC%C2%8A%C2%A4%C3%AD%C2%8A%C2%B8%C3%AB%C2%9D%C2%BC%C3%AC%C2%9D%C2%B4%C3%AC%C2%BB%C2%A4%20%C3%AC%C2%95%C2%84%C3%AC%C2%9D%C2%B4%C3%AC%C2%BD%C2%98.png%7D) <br/> 트윈 스트라이커 |<center> 도끼 |
| <center>![블래스트 아처](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697770961754_%C3%AB%C2%B8%C2%94%C3%AB%C2%9E%C2%98%C3%AC%C2%8A%C2%A4%C3%AD%C2%8A%C2%B8%C3%AC%C2%95%C2%84%C3%AC%C2%B2%C2%98%20%C3%AC%C2%95%C2%84%C3%AC%C2%9D%C2%B4%C3%AC%C2%BD%C2%98.png%7D) <br/> 블래스트 아처 | <center>활 |
| <center>![스펠 캐스터](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697770989416_%C3%AC%C2%8A%C2%A4%C3%AD%C2%8E%C2%A0%C3%AC%C2%BA%C2%90%C3%AC%C2%8A%C2%A4%C3%AD%C2%84%C2%B0%20%C3%AC%C2%95%C2%84%C3%AC%C2%9D%C2%B4%C3%AC%C2%BD%C2%98.png%7D) <br/> 스펠 캐스터 | <center>지팡이 |
| <center>![헤비 스매셔](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697771015016_%C3%AD%C2%97%C2%A4%C3%AB%C2%B9%C2%84%C3%AC%C2%8A%C2%A4%C3%AB%C2%A7%C2%A4%C3%AC%C2%85%C2%94%20%C3%AC%C2%95%C2%84%C3%AC%C2%9D%C2%B4%C3%AC%C2%BD%C2%98.png%7D) <br/> 헤비 스매셔 | <center>해머 |

</center>
</br></br>

> **스킬 보드**
> 

---

<center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697770157375_%C3%AC%C2%BA%C2%90%C3%AB%C2%A6%C2%AD%C3%AD%C2%84%C2%B0%20%C3%AC%C2%8A%C2%A4%C3%AC%C2%83%C2%B71.jpg%7D" width="720"/>

</br></br>
</center>

스킬 보드 탭 내에서는 자신의 클래스의 택티컬 스킬 및 클래스 어빌리티, 기본 어빌리티들의 영상과 상세 설명을 확인할 수 있습니다. </br>또한, 각 스킬의 습득 및 강화 레벨을 확인할 수 있으며, 택티컬 스킬은 파생 α 및 β의 습득 여부도 확인 가능합니다.

| 1 | 상단의 스크롤 바를 통해 무기 교체 없이 각 클래스의 레벨과 스킬들을 손쉽게 탐색할 수 있습니다. |
| --- | --- |

</br></br>

> **의상 ⋅ 마운트**
> 

---

<center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697770413572_%C3%AC%C2%9D%C2%98%C3%AC%C2%83%C2%81%20%C3%AC%C2%8A%C2%A4%C3%AC%C2%83%C2%B71.jpg%7D" width="720"/>

</center>
</br>

| 1 | 의상과 마운트 이매진 탭을 전환하는 버튼입니다. |
| --- | --- |
| 2 | 자신이 보유 중인 의상들을 확인 및 변경할 수 있습니다. 각 의상은 착용 부위에 따라 필터링할 수 있습니다. |
| 3 | 현재 착용 중인 의상 및 액세서리들을 확인할 수 있습니다. 또한, 캐릭터의 포즈를 변경하거나 회전시킬 수 있습니다. |

</br>

<center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697770431614_%C3%AC%C2%9D%C2%98%C3%AC%C2%83%C2%81%20%C3%AC%C2%8A%C2%A4%C3%AC%C2%83%C2%B72.jpg%7D" width="720"/>

</center>

</br>

| 4 | 마운트 이매진을 확인 및 변경할 수 있습니다. 마운트 이매진은 키보드 기준 G 키로 탑승할 수 있으며 건물 내부에선 자동으로 해제됩니다. |
| --- | --- |

</br></br>

> **효과 목록**
> 

---

<center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697770453806_%C3%AD%C2%9A%C2%A8%C3%AA%C2%B3%C2%BC%20%C3%AB%C2%AA%C2%A9%C3%AB%C2%A1%C2%9D%20%C3%AC%C2%8A%C2%A4%C3%AC%C2%83%C2%B7.jpg%7D" width="720"/>

</center>

</br>

| 1 | 현재 발동 및 적용 중인 모든 효과를 확인할 수 있습니다. 또한, 어빌리티 및 개척 어빌리티, 리퀴드 메모리, 기타 효과로 인한 효과들을 필터링할 수 있습니다. |
| --- | --- |
| 2 | 현재 적용 중인 효과들입니다. 발동 중인 효과가 존재한다면, 각 카테고리 아래에 효과 및 유효 시간이 표시됩니다. |

</br></br>

> **모험가 랭크**
> 

---

<center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697772573634_%C3%AB%C2%AA%C2%A8%C3%AD%C2%97%C2%98%C3%AA%C2%B0%C2%80%20%C3%AB%C2%9E%C2%AD%C3%AD%C2%81%C2%AC.jpg%7D" width="720"/>

</center>

</br>

현재의 모험자 랭크나 다음의 모험자 랭크에서 해방되는 내용 등을 확인할 수 있습니다.

'어드벤처 보드로 이동'을 누르면 현재 진행 중인 모험가 랭크업의 어드벤처 보드 화면으로 이동할 수 있습니다.
    `,
  },
  {
    id: '소지품',
    content: `커맨드 메뉴 내의 소지품 탭에서는 현재 보유하고 있는 아이템 및 창고, 메모리 케이스와 지갑을 확인할 수 있습니다.

  </br></br>
  
  > **가방**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697772878124_%C3%AA%C2%B0%C2%80%C3%AB%C2%B0%C2%A9%20%C3%AC%C2%8A%C2%A4%C3%AC%C2%83%C2%B7.jpg%7D" width="720"/>
  
  </center>
  
  </br>
  
  | 1 | 아이템 가방 및 장비 가방으로 전환할 수 있는 버튼 입니다. |
  | --- | --- |
  | 2 | 가방 내의 보유 항목이 표시됩니다. 아이템의 유형에 따라 필터링이 가능하며 정렬 또한 가능합니다. </br>아이템당 소지수 상한을 확인할 수 있습니다. |
  | 3 | 선택한 아이템의 상세 정보를 확인할 수 있습니다.  |
  
  </br></br>
  
  > **창고**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697772928175_%C3%AC%C2%B0%C2%BD%C3%AA%C2%B3%C2%A0.jpg%7D" width="720"/>
  
  </center>
  
  </br>
  
  | 1 | 아이템 창고 및 장비 창고로 전환할 수 있는 버튼입니다. |
  | --- | --- |
  | 2 | 창고에 맡겨 둔 아이템들을 확인할 수 있습니다. 아이템의 유형에 따라 필터링이 가능하며 정렬 또한 가능합니다. </br>아이템당 소지수 상한을 확인할 수 있습니다. |
  | 3 | 선택한 아이템의 상세 정보를 확인할 수 있습니다.  |
  
  </br></br>
  
  > **메모리 케이스**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697773055578_%C3%AB%C2%A6%C2%AC%C3%AD%C2%80%C2%B4%C3%AB%C2%93%C2%9C%20%C3%AB%C2%A9%C2%94%C3%AB%C2%AA%C2%A8%C3%AB%C2%A6%C2%AC.jpg%7D" width="720"/>
  
  </center>
  
  </br>
  
  현재 보유중인 리퀴드 메모리를 확인할 수 있습니다.
  
  각 리퀴드 메모리는 각자의 효과 및 등급, 활성화 조건 등을 확인할 수 있습니다.
  
  </br></br>
  
  > **지갑**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697773209939_%C3%AC%C2%A7%C2%80%C3%AA%C2%B0%C2%91.jpg%7D" width="720"/>
  
  </center>
  
  </br>
  
  지갑에서는 현재 보유중인 재화 및 티켓을 확인할 수 있습니다. 
  
  각 재화 및 티켓은 보유 상한이 존재하며, 보유 상한을 넘어가는 재화 및 티켓은 획득할 수 없습니다.
  
  </br></br>`,
  },
  {
    id: '퀘스트',
    content: ` 커맨드 메뉴 내의 퀘스트 화면에서는 완료 및 진행중인 퀘스트들과 어드벤쳐 보드를 확인할 수 있습니다.</br></br>
   > **받은 퀘스트**
   > 
   
   ---
    
   <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697775004698_%C3%AB%C2%B0%C2%9B%C3%AC%C2%9D%C2%80%20%C3%AD%C2%80%C2%98%C3%AC%C2%8A%C2%A4%C3%AD%C2%8A%C2%B8.jpg%7D" width="720"/>
   
  </br></br>
  </center>
    
    
  | 1 | 완료한 퀘스트 및 현재 진행중인 퀘스트의 목록입니다. 진행중인 퀘스트는 밝은 연두색으로 표시되며 완료한 퀘스트는 회색으로 표시됩니다. </br> 한번에 수락 가능한 최대 퀘스트 수는 10개이며, 그 이후로는 현재 진행중인 퀘스트를 포기하거나 완료해야 합니다. |
  | --- | --- |
  | 2 | 현재 선택한 퀘스트의 이름 및 종류를 확인할 수 있습니다.  |
  | 3 | 현재 선택한 퀘스트의 상세 정보를 확인할 수 있습니다.  |
    
  </br></br>
    
  > **어드벤쳐 보드**
  > 
    
  ---
    
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697774885958_%C3%AC%C2%96%C2%B4%C3%AB%C2%93%C2%9C%C3%AB%C2%B2%C2%A4%C3%AC%C2%B3%C2%90%20%C3%AB%C2%B3%C2%B4%C3%AB%C2%93%C2%9C.jpg%7D" width="720"/>
    
  </br></br>
  </center>
    
  어드벤쳐 보드 탭에선 자신의 모험가 랭크 및 모험가 랭크 퀘스트를 확인할 수 있습니다.
    
  보다 자세한 내용은 [모험가 랭크 가이드](https://blue-protocol-db-test.netlify.app/guide/%EB%AA%A8%ED%97%98%EA%B0%80%20%EB%9E%AD%ED%81%AC%20%EC%97%85%20%222%22%20%EB%B3%B4%EB%93%9C)를 참고해 주세요.
  
  </br></br>
    
  > **찜 목록**
  > 
  
  ---
    
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697775031568_%C3%AC%C2%B0%C2%9C%C3%AB%C2%AA%C2%A9%C3%AB%C2%A1%C2%9D.jpg%7D" width="720"/>
  
  </br></br>
  </center>
    
    
  찜 목록 탭에선 자신이 크래프트 화면 등에서 등록한 레시피의 목록을 확인할 수 있습니다.
    
    
  </br></br>`,
  },
  {
    id: '지도',
    content: `
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697776095571_%C3%AC%C2%A7%C2%80%C3%AB%C2%8F%C2%84.jpg%7D" width="720"/>

</center>

</br>

| 1 | 현재 확인하고 있는 지도의 지명을 확인할 수 있습니다. |
| --- | --- |
| 2 | 캐릭터가 현재 위치하고 있는 지역의 지명을 확인할 수 있습니다. |
| 3 | 게임 내의 다른 지역들을 확인 및 변경할 수 있습니다. |
| 4 | 중요하거나 기억해 두어야할 장소에 핀을 찍어둘 수 있습니다. |

</br></br>

## 게임 내 지역


</br></br>


> **교역도시 아스텔리즈**
> 

<center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697776119414_%C3%AC%C2%95%C2%84%C3%AC%C2%8A%C2%A4%C3%AD%C2%85%C2%94%C3%AB%C2%A6%C2%AC%C3%AC%C2%A6%C2%88%20%C3%AA%C2%B8%C2%B0%C3%AB%C2%B3%C2%B8%20%C3%AB%C2%A7%C2%B5.jpg%7D" width="720"/>

</center>

</br>

|**교역도시 아스텔리즈**는 플레이어가 기본적으로 게임을 시작하는 도시입니다. 도시 내에선 낚시터 및 개척국, 창고 등에 접근할 수 있습니다. </br></br>개척국이 이곳에 위치하여 있으므로, 게임을 플레이하면서 가장 많이 들러야 하는 장소 중 한 곳입니다.|
|--|

</br></br>

> **아스텔리아 평원**
> 

<center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697776159650_%C3%AC%C2%95%C2%84%C3%AC%C2%8A%C2%A4%C3%AD%C2%85%C2%94%C3%AB%C2%A6%C2%AC%C3%AC%C2%A6%C2%88%20%C3%AD%C2%8F%C2%89%C3%AC%C2%9B%C2%90%20%C3%AA%C2%B8%C2%B0%C3%AB%C2%B3%C2%B8%C3%AB%C2%A7%C2%B5.jpg%7D" width="720"/>

</center>

</br>

|**아스텔리아 평원**은 **교역도시 아스텔리즈**를 제외한 지역 중, 플레이어가 가장 먼저 도달하는 지역입니다. </br>이 광대한 평원은 바다 울음 초원, 민스터 호른, 민스터 구릉, 안드라 분지 및 저녁 고요 단구 지역으로 나누어져 있습니다. </br></br>민스터 구릉 주위에는 아스테리아 평원 주변에서 가장 큰 버페리아 유적인 ‘거룡의 발톱 자국’을 찾을 수 있습니다. </br></br>또한, 평원 서쪽에 존재하는 높이 솟은 유적인 안드라 분지의 ‘거탑 유적’을 탐험할 수도 있습니다.|
|--|

</br></br>

> **바하마르 고원**
> 

<center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697776177980_%C3%AB%C2%B0%C2%94%C3%AD%C2%95%C2%98%C3%AB%C2%A7%C2%88%C3%AB%C2%A5%C2%B4%20%C3%AA%C2%B3%C2%A0%C3%AC%C2%9B%C2%90%20%C3%AA%C2%B8%C2%B0%C3%AB%C2%B3%C2%B8%C3%AB%C2%A7%C2%B5.jpg%7D" width="720"/>

</center>

</br>

|**바하마르 고원**은 **아스텔리아 평원**에서 이어지는 동굴을 통해 도착할 수 있습니다. **아스텔리아 평원**과는 다르게 바위나 절벽 등 험준한 지형으로 이루어져 있으며,<br/> 잘만 활용한다면 지름길이 될 수도 있지만 낙하 데미지 및 낭떠러지에서 추락하여 사망하는 경우를 주의해야 합니다.</br></br>이 험준한 고원에서는 마그나 대륙 최대 규모의 버페리아 유적, ‘신내림 기둥’을 방문할 수 있습니다.  </br></br>고원의 서쪽에는 고원 여우와 유령 도마뱀들이 무리 지어 서식하고 있으며, 플레이어에게 적대적인 황제 엘크도 배회하고 있으니, 주의가 필요합니다. |
|--|

</br></br>

> **몽테놀 계곡**
> 

<center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697776192859_%C3%AB%C2%AA%C2%BD%C3%AD%C2%85%C2%8C%C3%AB%C2%86%C2%80%20%C3%AA%C2%B3%C2%84%C3%AA%C2%B3%C2%A1%20%C3%AA%C2%B8%C2%B0%C3%AB%C2%B3%C2%B8%C3%AB%C2%A7%C2%B5.jpg%7D" width="720"/>

</center>

</br>

|**몽테놀 계곡**은 거대한 폭포와 바위 산맥이 절경을 만들어 내는 아름다운 지역입니다.<br/> **바하마르 고원**과 마찬가지로 험준한 산세를 이루고 있지만,암벽을 타고 올라갈 수 있는 지대가 존재하기 때문에 보다 원활한 이동이 가능합니다. |
|--|

</br></br>

> **살람자트 오아시스**
> 

<center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697776205273_%C3%AC%C2%82%C2%B4%C3%AB%C2%9E%C2%8C%C3%AC%C2%9E%C2%90%C3%AD%C2%8A%C2%B8%20%C3%AC%C2%98%C2%A4%C3%AC%C2%95%C2%84%C3%AC%C2%8B%C2%9C%C3%AC%C2%8A%C2%A4%20%C3%AA%C2%B8%C2%B0%C3%AB%C2%B3%C2%B8%C3%AB%C2%A7%C2%B5.jpg%7D" width="720"/>

</center>

</br>

| **살람자트 오아시스**는 여행자들과 유목민들이 모여 형성된 마을입니다. 하지만 플레이어들을 위한 편의 시설들이 **교역도시 아스텔리즈**에 비해 많이 부실하고, 공간 이동 포털도 존재하지 않습니다. |
| -- |

</br></br>

> **에버그린 사막**
> 

<center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697776220381_%C3%AC%C2%97%C2%90%C3%AB%C2%B2%C2%84%C3%AA%C2%B7%C2%B8%C3%AB%C2%A6%C2%B0%20%C3%AC%C2%82%C2%AC%C3%AB%C2%A7%C2%89.jpg%7D" width="720"/>

</center>

</br>

| **에버그린 사막**은 소개한 지역들중 가장 넓음과 동시에 지름길도 존재하지 않기 때문에 이동에 다소 불편함을 느낄 수 있는 지역입니다. </br> </br>이 광활한 사막에 떠 있는 풍선들을 따라가다 보면, 플레이어들은 손쉽게 **살람자트 오아시스**로 향할 수 있습니다. </br></br>또한, 사막의 동쪽 끝에는 사막의 벌레들이 오랜 시간에 걸쳐 만든 둥지이자 무덤, ‘새벽 벌레요새’가 있습니다. 요새의 내부에는 게거미와 무크,</br> 모래독사를 포함한 수많은 몬스터들이 존재하며 바닥에는 독이 흩뿌려져 있으므로 특히 주의해야 합니다.</br></br>달구비 옛 가도 지역에는 거대한 유적지인 ‘카르툼 유적’이 존재하고 있습니다. 하지만 이 매력적인 유적지의 주변에는 다수의 도적단이 포진해있기 때문에 이 역시 주의할 요소입니다. |
| -- |

</br></br>
  `,
  },
  {
    id: '커뮤니케이션',
    content: `커맨드 메뉴 내의 커뮤니케이션 탭에서는 자신의 모험가 카드를 커스터마이징 하거나 친구 목록과 채팅 설정을 확인 및 관리할 수 있습니다.

  </br></br>
  
  > **모험가 카드**
  > 
  
  ---
  
  모험가 카드는 다른 플레이어들과 교환할 수 있는 카드 형태의 요약본입니다. 이 카드엔 자신의 모험가 랭크 및 배틀 스코어, 클래스 및 클래스 레벨, 스크린샷등 자신의 여러가지 요소들을  나타냅니다.
  
  </br>
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697945452751_%C3%AB%C2%AA%C2%A8%C3%AD%C2%97%C2%98%C3%AA%C2%B0%C2%80%20%C3%AC%C2%B9%C2%B4%C3%AB%C2%93%C2%9C.jpg%7D" width="720"/>
  
  </br></br>
  </center>
  
  | 1 | 칭호, 캐릭터의 이름, 플레이어 ID와 다른 플레이어들 에게서 받은 좋아요수 등이 표시됩니다. </br>캐릭터 칭호의 경우, 게임을 플레이하면서 획득한 칭호 중에서 선택하여 착용할 수 있습니다. |
  | --- | --- |
  | 2 | 모험가 카드의 헤더 부분은 게임을 플레이하며 촬영한 스크린샷들로 변경할 수 있습니다. |
  | 3 | 자신의 모험가 랭크와 배틀 스코어, 클래스 레벨등 기본적인 정보가 표시됩니다. |
  | 4 | 게임 내에서 촬영한 스크린샷들을 최대 3장까지 설정할 수 있습니다.  |
  
  </br></br>
  
  > **앨범**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697945502450_%C3%AC%C2%95%C2%A8%C3%AB%C2%B2%C2%94.jpg%7D" width="720"/>
  
  </br></br>
  </center>
  
  앨범 내에서는 사진 모드에서 촬영한 스크린샷들을 저장 및 관리할 수 있습니다.
  
  </br></br>
  
  > **친구 관리**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697945519241_%C3%AC%C2%B9%C2%9C%C3%AA%C2%B5%C2%AC%C3%AA%C2%B4%C2%80%C3%AB%C2%A6%C2%AC.jpg%7D" width="720"/>
  
  </br></br>
  </center>
  
  </br>
  
  | 1 | 친구 목록에서는 모험가 카드를 서로 교환한 플레이어가 표시되며, 파티 권유 및 귓속말이 가능해집니다.</br>또한, 해당 플레이어가 속한 팀을 확인할 수 있습니다. |
  | --- | --- |
  | 2 | 교환 대기 목록에서는 자신에게 모험가 카드를 보낸 플레이어들의 목록이 표시됩니다. 모험가 카드를 보낼시, 친구로 등록됩니다. |
  | 3 | 차단 목록에서는 자신이 차단한 플레이어들의 목록을 확인하고 차단을 해제할 수 있습니다. |
  | 4 | 만난 플레이어 목록에서는 자신이 이전에 파티를 맺는등 함께 플레이 했던 플레이어들의 목록이 표시됩니다.</br></br>목록에 표시되는 플레이어들의 모험가 카드를 확인하거나 자신의 모험가 카드를 보낼 수도 있습니다. |
  
  </br></br>
  
  > 캐릭터 찾기
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697945539955_%C3%AC%C2%BA%C2%90%C3%AB%C2%A6%C2%AD%C3%AD%C2%84%C2%B0%20%C3%AC%C2%B0%C2%BE%C3%AA%C2%B8%C2%B0.jpg%7D" width="720"/>
  
  </br></br>
  </center>
  
  
  캐릭터 찾기 탭에서는 다른 플레이어들의 캐릭터를 검색할 수 있습니다. 
  
  캐릭터 검색은 캐릭터 이름 및 ID, 클래스 및 상태로 구분되어 상세 검색이 가능합니다. 검색 결과 목록에서 파티 모집 및 귓속말을 보낼 수도 있습니다.
  
  </br></br>
  
  > **대화 관리**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697945557792_%C3%AB%C2%8C%C2%80%C3%AD%C2%99%C2%94%C3%AA%C2%B4%C2%80%C3%AB%C2%A6%C2%AC.jpg%7D" width="720"/>
  
  </br></br>
  </center>
  
  대화 관리 탭에서는 자동 메시지를 설정할 수 있습니다. 
  
  자동 메시지는 끄거나 킬수 있고, 메시지를 볼 수 있는 범위도 설정할 수 있습니다.`,
  },
  {
    id: '미션',
    content: `<center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697955249872_%C3%AB%C2%AF%C2%B8%C3%AC%C2%85%C2%98.jpg%7D" width="720"/>

  </br></br>
  </center>
  
  
  | 1 | 각 미션은 각종 조사 및 러시 배틀, 스코어 어택등, 종류에 따라 분류되어 있습니다. |
  | --- | --- |
  | 2 | 해금된 미션과 그 미션의 적정 배틀 스코어를 확인할 수 있습니다.</br></br>적정 배틀 스코어는 권장 수치일뿐이며, 자신의 캐릭터 및 파티 멤버의 배틀 스코어가 보다 낮은 경우에도 미션은 시작할 수 있습니다. |
  | 3 | 자신의 레벨과 모험가 랭크 및 파티 멤버의 클래스와 레벨을 확인할 수 있습니다.</br></br>적정 배틀 스코어와는 달리, 파티 내 최소 배틀 스코어는 충족되어야만 미션을 신청할 수 있습니다. |
  | 4 | 해당 미션에 대한 보다 세부적인 내용을 확인할 수 있습니다.</br></br>확인 가능한 정보에는 최대 인원, 시간 제한, 지급 아이템, 그리고 보상등이 포함되어 있습니다. |
  | 5 | 플러스 보상의 수령 가능 횟수 및 티켓 보유수를 확인할 수 있습니다. |
  | 6 | 혼자서 신청 및 파티로 신청과 매칭 신청을 할 수 있습니다. </br></br>   -  혼자서 신청 및 파티에서 신청을 할시, 1인 또는 현재 파티로 공략을 시작하게 됩니다. </br> - 매칭 신청을 하게 되면 랜덤한 플레이어끼리 매칭이 되어 자동으로 파티를 결성 후 공략을 시작하게 됩니다.  |
  
  </br></br>
  
  > **플러스 보상이란?**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697955265376_%C3%AB%C2%AF%C2%B8%C3%AC%C2%85%C2%98%20%C3%AA%C2%B2%C2%B0%C3%AA%C2%B3%C2%BC%C3%AC%C2%B0%C2%BD.jpg%7D" width="720"/>
  
  </br></br>
  </center>
  
  
  플러스 보상은 미션의 일반 보상 이외에 추가로 받을수 있는 보상입니다. 
  
  미션 클리어시, 결과창에서 ‘받기’를 선택하여 남은 수령 횟수를 1회 차감하고 플러스 보상 아이템을 획득할 수 있습니다.
  
  플러스 보상의 수령 횟수는 매일 오전 4시에 초기화되며, ‘플러스 보상 수령 횟수 추가 티켓’을 사용하면 수령 횟수를 추가할 수 있습니다.`,
  },
  {
    id: '파티',
    content: `파티는 강력한 적들과 힘든 미션을 공략할때 다른 플레이어들과 함께 도전할 수 있게 해주는 기능입니다.

  </br></br>
  
  > **파티원**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697956662762_%C3%AD%C2%8C%C2%8C%C3%AD%C2%8B%C2%B0%C3%AC%C2%9B%C2%90.jpg%7D" width="720"/>
  
  </br></br>
  </center>
  
  
  | 1 | 대상 캐릭터와의 관계를 표시해 주는 리본입니다.</br></br>[L] - 파티의 파티장인 경우에 표시됩니다.</br>[P] - 자신과 같은 파티원인 경우에 표시됩니다.</br>[F] - 자신과 친구 상태인 경우에 표시됩니다. |
  | --- | --- |
  | 2 | 대상 캐릭터의 현재 활동을 확인할 수 있습니다. |
  | 3 | ‘지금 바로 파티’ 기능을 활성화할 수 있습니다.</br></br>이 기능을 활성화할 때, 근처의 플레이어 중 해당 설정을 활성화한 플레이어가 존재할 시 자동으로 파티를 맺게 됩니다. |
  | 4 | 파티장 양도 및 파티원 추방 등 파티 관련 메뉴를 확인 및 조작할 수 있습니다. |
  
  </br></br>
  
  > **모집 목록**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697956677184_%C3%AB%C2%AA%C2%A8%C3%AC%C2%A7%C2%91%C3%AB%C2%AA%C2%A9%C3%AB%C2%A1%C2%9D.jpg%7D" width="720"/>
  
  </br></br>
  </center>
  
  
  모집 목록 탭에서는 다른 플레이어들의 모집 상태인 파티에 참여할 수 있습니다. 
  
  목적지 필터링이나 ID 검색 등을 이용하여 조건에 맞는 파티를 검색하는 것도 가능합니다.`,
  },
  {
    id: '팀',
    content: `팀은 여타 다른 게임들의 길드 시스템과 동일한 시스템입니다. 해당 시스템을 통해, 플레이어는 보다 많은 사람들과 함께 게임을 즐기실 수 있습니다.

  팀은 모험 랭크 3부터 해금할 수 있습니다.
  
  </br></br>
  
  
  > **팀 카드**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697959820747_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AD%C2%8C%C2%80%20%C3%AC%C2%B9%C2%B4%C3%AB%C2%93%C2%9C.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  </br>
  
  팀 카드를 확인할 수 있습니다. 팀 카드에서는 팀 ID 및 팀 결성일, 그리고 활동 시간 및 활동 내용 등을 확인 및 변경할 수 있습니다.
  
  </br>
  </br>
  
  > **팀원**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697959831968_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AD%C2%8C%C2%80%C3%AC%C2%9B%C2%90.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  팀에 소속되어 있는 캐릭터의 정보 및 가입 신청, 가입 권유중인 캐릭터의 상태를 확인할 수 있습니다. 
  
  팀에는 「리더」 「서브 리더」 「어시스턴트」 「멤버」, 총 4종류의 권한이 있으며, 캐릭터의 오른쪽에 있는 톱니바퀴 아이콘을 누르면 해당 멤버의 권한을 변경할 수 있습니다.
  
  </br>
  </br>
  
  > **활동 로그**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697959845465_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AD%C2%99%C2%9C%C3%AB%C2%8F%C2%99%20%C3%AA%C2%B8%C2%B0%C3%AB%C2%A1%C2%9D.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  팀원들의 활동 기록을 확인할 수 있습니다. 
  
  </br>
  </br>
  
  > **랭크**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697959856940_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AB%C2%9E%C2%AD%C3%AD%C2%81%C2%AC.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  </br>
  
  현재 팀 랭크 및 랭크가 올라갈수록 해금되는 최대 인원수를 확인할 수 있습니다.`,
  },
  {
    id: '전투',
    content: `필드나 던전 내부에서는 적들이 출현합니다. 

  적들에게 선제 공격시, 적대 상태가 되며 전투가 시작되며, 몇몇 적들은 기본적으로 플레이어에게 적대적 입니다.
  
  </br></br>
  
  > **전투 인터페이스**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697579056295_%C3%AC%C2%A0%C2%84%C3%AD%C2%88%C2%AC%20%C3%AC%C2%8A%C2%A4%C3%AC%C2%83%C2%B71.jpg%7D" width="720"/>
  
  </center>
  
  
  </br>
  
  | 1 | 적의 HP 및 레벨, 이름이 표시됩니다. |
  | --- | --- |
  | 2 | 포션 같은 소모품을 전투중 빠르게 사용할수 있는 퀵바 입니다.  |
  | 3 | 적이 현재 적대 상태이며, 어그로 대상자를 표시 해줍니다. |
  | 4 | 자신의 HP 및 ST가 표시됩니다. |
  | 5 | 자신의 택티컬 스킬 및 ULT 스킬, 배틀 이매진들의 쿨타임이 표시됩니다. |
  | 6 | 자신의 이름 및 클래스, 레벨과 경험치가 표시됩니다. |
  
  </br></br>
  
  > **버프 및 디버프의 종류**
  > 
  
  ---
  </br>
  
  - **버프**
  
      
      | <center>아이콘 | <center>이름 | <center>효과 |
      | --- | --- | --- |
      | <center>![주는 데미지 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697575916430_%C3%AC%C2%97%C2%85-%C3%AC%C2%A3%C2%BC%C3%AB%C2%8A%C2%94%20%C3%AB%C2%8D%C2%B0%C3%AB%C2%AF%C2%B8%C3%AC%C2%A7%C2%80.jpg%7D) | <center>주는 데미지 업 | 주는 데미지가 상승한 상태 |
      | <center>![피격 데미지 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697575940053_%C3%AB%C2%8B%C2%A4%C3%AC%C2%9A%C2%B4-%20%C3%AB%C2%B0%C2%9B%C3%AB%C2%8A%C2%94%C3%AD%C2%94%C2%BC%C3%AD%C2%95%C2%B4.jpg%7D) | <center>피격 데미지 다운 | 받는 피해가 감소한 상태 |
      | <center>![hp 흡수](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697575950611_hp%C3%AD%C2%9D%C2%A1%C3%AC%C2%88%C2%98.jpg%7D) | <center>HP 흡수 | 적중한 공격에 비례하여 HP회복 |
      | <center>![슈퍼아머](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697575966210_%C3%AC%C2%8A%C2%88%C3%AD%C2%8D%C2%BC%C3%AC%C2%95%C2%84%C3%AB%C2%A8%C2%B8.jpg%7D) | <center>슈퍼 아머 | 피격 모션이 되지 않는 상태 |
      | <center>![hp 지속회복](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697575978281_hp%20%C3%AC%C2%A7%C2%80%C3%AC%C2%86%C2%8D%C3%AD%C2%9A%C2%8C%C3%AB%C2%B3%C2%B5.jpg%7D) | <center>HP 지속 회복 | HP가 지속적으로 회복하는 상태 |
      | <center>![ep 지속회복](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697575988525_ep%20%C3%AC%C2%A7%C2%80%C3%AC%C2%86%C2%8D%C3%AD%C2%9A%C2%8C%C3%AB%C2%B3%C2%B5.jpg%7D) | <center>EP 지속 회복 | EP가 지속적으로 회복하는 상태 |
      | <center>![퀵 차지](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576000394_%C3%AD%C2%80%C2%B5%C3%AC%C2%B0%C2%A8%C3%AC%C2%A7%C2%80.jpg%7D) | <center>퀵 차지 | 차지 스킬의 차징 속도가 빨라지는 상태 |
      | <center>![퀵 인터벌](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576012088_%C3%AD%C2%80%C2%B5%20%C3%AC%C2%9D%C2%B8%C3%AD%C2%84%C2%B0%C3%AB%C2%B3%C2%BC.jpg%7D) | <center>퀵 인터벌 | 스킬의 리캐스트가 빨라지는 상태 |
      | <center>![이동속도 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576025890_%C3%AC%C2%9D%C2%B4%C3%AC%C2%86%C2%8D%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>이동 속도 업 | 이동 속도가 상승한 상태 |
      | <center>![화속성 효과 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576039700_%C3%AD%C2%99%C2%94%C3%AC%C2%86%C2%8D%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>화속성 효과 업 | 화속성 공격의 데미지 및 속성 축적치 상승 |
      | <center>![빙속성 효과 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576052179_%C3%AB%C2%B9%C2%99%C3%AC%C2%86%C2%8D%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>빙속성 효과 업 | 빙속성 공격의 데미지 및 속성 축적치 상승 |
      | <center>![뇌속성 효과 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576059821_%C3%AB%C2%87%C2%8C%C3%AC%C2%86%C2%8D%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>뇌속성 효과 업 | 뇌속성 공격의 데미지 및 속성 축적치 상승 |
      | <center>![토속성 효과 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576071487_%C3%AD%C2%86%C2%A0%C3%AC%C2%86%C2%8D%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>토속성 효과 업 | 토속성 공격의 데미지 및 속성 축적치 상승 |
      | <center>![광속성 효과 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576107477_%C3%AA%C2%B4%C2%91%C3%AC%C2%86%C2%8D%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>광속성 효과 업 | 광속성 공격의 데미지 및 속성 축적치 상승 |
      | <center>![암속성 효과 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576117993_%C3%AC%C2%95%C2%94%C3%AC%C2%86%C2%8D%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>암속성 효과 업 | 암속성 공격의 데미지 및 속성 축적치 상승 |
      | <center>![화속성 내성 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576129092_%C3%AD%C2%99%C2%94%C3%AB%C2%82%C2%B4%C3%AC%C2%84%C2%B1%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>화속성 내성 업 | 화속성 공격으로 부터의 피해 감소 및 속성 축적치 감소 |
      | <center>![빙속성 내성 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576140316_%C3%AB%C2%B9%C2%99%C3%AB%C2%82%C2%B4%C3%AC%C2%84%C2%B1%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>빙속성 내성 업 | 빙속성 공격으로 부터의 피해 감소 및 속성 축적치 감소 |
      | <center>![뇌속성 내성 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576152828_%C3%AB%C2%87%C2%8C%C3%AB%C2%82%C2%B4%C3%AC%C2%84%C2%B1%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>뇌속성 내성 업 | 뇌속성 공격으로 부터의 피해 감소 및 속성 축적치 감소 |
      | <center>![토속성 내성 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576163590_%C3%AD%C2%86%C2%A0%C3%AB%C2%82%C2%B4%C3%AC%C2%84%C2%B1%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>토속성 내성 업 | 토속성 공격으로 부터의 피해 감소 및 속성 축적치 감소 |
      | <center>![광속성 내성 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576174069_%C3%AA%C2%B4%C2%91%C3%AB%C2%82%C2%B4%C3%AC%C2%84%C2%B1%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>광속성 내성 업 | 광속성 공격으로 부터의 피해 감소 및 속성 축적치 감소 |
      | <center>![암속성 내성 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576183354_%C3%AC%C2%95%C2%94%C3%AB%C2%82%C2%B4%C3%AC%C2%84%C2%B1%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>암속성 내성 업 | 암속성 공격으로 부터의 피해 감소 및 속성 축적치 감소 |
      | <center>![st 회복속도 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576193140_st%C3%AD%C2%9A%C2%8C%C3%AB%C2%B3%C2%B5%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>ST 회복속도 업 | 스태미너의 회복 속도가 상승 |
      | <center>![st 소모 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576207568_st%C3%AC%C2%86%C2%8C%C3%AB%C2%AA%C2%A8%C3%AA%C2%B0%C2%90%C3%AC%C2%86%C2%8C.jpg%7D) | <center>ST 소모 다운 | 스태미너의 소비량이 % 비율로 감소 |
      | <center>![일회성 방어막](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576218107_%C3%AC%C2%9D%C2%BC%C3%AD%C2%9A%C2%8C%C3%AC%C2%8B%C2%A4%C3%AB%C2%93%C2%9C.jpg%7D) | <center>일회성 방어막 | 다음 한번의 피해를 무효화 |
      | <center>![원타임 크리티컬](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576226853_%C3%AC%C2%9B%C2%90%C3%AD%C2%83%C2%80%C3%AC%C2%9E%C2%84%C3%AD%C2%81%C2%AC%C3%AB%C2%A6%C2%AC.jpg%7D) | <center>원타임 크리티컬 | 다음 한번의 공격이 치명타로 적용 |
      | <center>![회심률 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576237281_%C3%AD%C2%9A%C2%8C%C3%AC%C2%8B%C2%AC%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>회심률 업 | 크리티컬 확률이 상승 |
      | <center>![hp 전체회복](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576246812_hp%20%C3%AC%C2%A0%C2%84%C3%AC%C2%B2%C2%B4%C3%AD%C2%9A%C2%8C%C3%AB%C2%B3%C2%B5.jpg%7D) | <center>HP 전체 회복 | HP가 즉시 전체 회복 |
      | <center>![points up](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576257006_point%20up.jpg%7D) | <center>POINTS UP | 일정시간 점수 획득 시 배율이 상승 |
      | <center>![실드 세이브](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576268232_%C3%AC%C2%8B%C2%A4%C3%AB%C2%93%C2%9C%C3%AC%C2%84%C2%B8%C3%AC%C2%9D%C2%B4%C3%AB%C2%B8%C2%8C.jpg%7D) | <center>실드 세이브 | 이지스 파이터 전용 효과 |
      | <center>![타운트 모드](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576282066_%C3%AD%C2%83%C2%80%C3%AC%C2%9A%C2%B4%C3%AD%C2%8A%C2%B8%C3%AB%C2%AA%C2%A8%C3%AB%C2%93%C2%9C.jpg%7D) | <center>타운트 모드 | 이지스 파이터 전용 효과 |
      | <center>![이그니션](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576290722_%C3%AC%C2%9D%C2%B4%C3%AA%C2%B7%C2%B8%C3%AB%C2%8B%C2%88%C3%AC%C2%85%C2%98.jpg%7D) | <center>이그니션 | 트윈 스트라이커 전용 효과 |
      | <center>![헌터 스피릿](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576301730_%C3%AC%C2%82%C2%AC%C3%AB%C2%83%C2%A5%C3%AA%C2%BE%C2%BC%C3%AC%C2%A0%C2%95%C3%AC%C2%8B%C2%A0.jpg%7D) | <center>헌터 스피릿 | 블래스트 아처 전용 효과 |
      | <center>![상태이상 무효](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576313486_%C3%AC%C2%83%C2%81%C3%AD%C2%83%C2%9C%C3%AC%C2%9D%C2%B4%C3%AC%C2%83%C2%81%C3%AB%C2%AC%C2%B4%C3%AD%C2%9A%C2%A8.jpg%7D) | <center>상태 이상 무효 | 블래스트 아처 전용 효과 |
      | <center>![발로우 발렛](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576326712_%C3%AD%C2%8C%C2%94%C3%AB%C2%A1%C2%9C%C3%AC%C2%9A%C2%B0%C3%AB%C2%B0%C2%9C%C3%AB%C2%A0%C2%9B.jpg%7D) | <center>팔로우 발렛 | 스펠 캐스터 전용 효과 |
      | <center>![록 바디](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576338117_%C3%AB%C2%A1%C2%9D%C3%AB%C2%B0%C2%94%C3%AB%C2%94%C2%94.jpg%7D) | <center>록 바디 | 헤비 스매셔 전용 효과 |
      | <center>![큐어 카트리지](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697576351653_%C3%AD%C2%81%C2%90%C3%AC%C2%96%C2%B4%C3%AC%C2%B9%C2%B4%C3%AD%C2%8A%C2%B8%C3%AB%C2%A6%C2%AC%C3%AC%C2%A7%C2%80.jpg%7D) | <center>큐어 카트리지 | 헤비 스매셔 전용 효과 |
  
  </br>
  
  - **디버프**
      
      
      | <center>아이콘 | <center>이름 | <center>효과 |
      | --- | --- | --- |
      | <center>![주는 데미지 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577104879_%C3%AC%C2%A3%C2%BC%C3%AB%C2%8A%C2%94%20%C3%AB%C2%8D%C2%B0%C3%AB%C2%AF%C2%B8%C3%AC%C2%A7%C2%80%20%C3%AB%C2%8B%C2%A4%C3%AC%C2%9A%C2%B4.jpg%7D) | <center>주는 데미지 다운 | 주는 데미지가 감소한 상태 |
      | <center>![피격 데미지 업](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577094293_%C3%AB%C2%B0%C2%9B%C3%AD%C2%94%C2%BC%C3%AC%C2%A6%C2%9D%C3%AA%C2%B0%C2%80.jpg%7D) | <center>피격 데미지 업 | 받는 피해가 상승한 상태 |
      | <center>![슬로우 차지](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577125680_%C3%AC%C2%8A%C2%AC%C3%AB%C2%A1%C2%9C%C3%AC%C2%9A%C2%B0%20%C3%AC%C2%B0%C2%A8%C3%AC%C2%A7%C2%80.jpg%7D) | <center>슬로우 차지 | 차지 스킬의 차징 속도가 느려지는 상태 |
      | <center>![슬로우 인터벌](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577139443_%C3%AC%C2%8A%C2%AC%C3%AB%C2%A1%C2%9C%C3%AC%C2%9A%C2%B0%20%C3%AC%C2%9D%C2%B8%C3%AD%C2%84%C2%B0%C3%AB%C2%B2%C2%8C.jpg%7D) | <center>슬로우 인터벌 | 스킬의 리캐스트가 느려지는 상태 |
      | <center>![이동속도 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577154051_%C3%AC%C2%9D%C2%B4%C3%AC%C2%86%C2%8D%20%C3%AA%C2%B0%C2%90%C3%AC%C2%86%C2%8C.jpg%7D) | <center>이동 속도 다운 | 이동 속도가 감소한 상태 |
      | <center>![화속성 효과 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577162439_%C3%AD%C2%99%C2%94%C3%AC%C2%86%C2%8D%C3%AA%C2%B0%C2%90%C3%AC%C2%86%C2%8C.jpg%7D) | <center>화속성 효과 다운 | 화속성 공격의 데미지 및 속성 축적치 감소 |
      | <center>![빙속성 효과 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577173107_%C3%AB%C2%B9%C2%99%C3%AC%C2%86%C2%8D%C3%AA%C2%B0%C2%90%C3%AC%C2%86%C2%8C.jpg%7D) | <center>빙속성 효과 다운 | 빙속성 공격의 데미지 및 속성 축적치 감소 |
      | <center>![뇌속성 효과 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577181725_%C3%AB%C2%87%C2%8C%C3%AC%C2%86%C2%8D%C3%AA%C2%B0%C2%90%C3%AC%C2%86%C2%8C.jpg%7D) | <center>뇌속성 효과 다운 | 뇌속성 공격의 데미지 및 속성 축적치 감소 |
      | <center>![토속성 효과 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577192703_%C3%AD%C2%86%C2%A0%C3%AC%C2%86%C2%8D%C3%AA%C2%B0%C2%90%C3%AC%C2%86%C2%8C.jpg%7D) | <center>토속성 효과 다운 | 토속성 공격의 데미지 및 속성 축적치 감소 |
      | <center>![광속성 효과 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577202971_%C3%AA%C2%B4%C2%91%C3%AC%C2%86%C2%8D%C3%AA%C2%B0%C2%90%C3%AC%C2%86%C2%8C.jpg%7D) | <center>광속성 효과 다운 | 광속성 공격의 데미지 및 속성 축적치 감소 |
      | <center>![암속성 효과 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577221610_%C3%AC%C2%95%C2%94%C3%AC%C2%86%C2%8D%C3%AA%C2%B0%C2%90%C3%AC%C2%86%C2%8C.jpg%7D) | <center>암속성 효과 다운 | 암속성 공격의 데미지 및 속성 축적치 감소 |
      | <center>![화속성 내성 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577229060_%C3%AD%C2%99%C2%94%C3%AB%C2%82%C2%B4%C3%AC%C2%84%C2%B1%C3%AA%C2%B0%C2%90%C3%AC%C2%86%C2%8C.jpg%7D) | <center>화속성 내성 다운 | 화속성 공격으로 부터의 피해 상승 및 속성 축적치 상승 |
      | <center>![빙속성 내성 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577242114_%C3%AB%C2%B9%C2%99%C3%AB%C2%82%C2%B4%C3%AC%C2%84%C2%B1%C3%AA%C2%B0%C2%90%C3%AC%C2%86%C2%8C.jpg%7D) | <center>빙속성 내성 다운 | 빙속성 공격으로 부터의 피해 상승 및 속성 축적치 상승 |
      | <center>![뇌속성 내성 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577253243_%C3%AB%C2%87%C2%8C%C3%AB%C2%82%C2%B4%C3%AC%C2%84%C2%B1%C3%AA%C2%B0%C2%90%C3%AC%C2%86%C2%8C.jpg%7D) | <center>뇌속성 내성 다운 | 뇌속성 공격으로 부터의 피해 상승 및 속성 축적치 상승  |
      | <center>![토속성 내성 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577260546_%C3%AD%C2%86%C2%A0%C3%AB%C2%82%C2%B4%C3%AC%C2%84%C2%B1%C3%AA%C2%B0%C2%90%C3%AC%C2%86%C2%8C.jpg%7D) | <center>토속성 내성 다운 | 토속성 공격으로 부터의 피해 상승 및 속성 축적치 상승  |
      | <center>![광속성 내성 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577268499_%C3%AA%C2%B4%C2%91%C3%AB%C2%82%C2%B4%C3%AC%C2%84%C2%B1%C3%AA%C2%B0%C2%90%C3%AC%C2%86%C2%8C.jpg%7D) | <center>광속성 내성 다운 | 광속성 공격으로 부터의 피해 상승 및 속성 축적치 상승  |
      | <center>![암속성 내성 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577277390_%C3%AC%C2%95%C2%94%C3%AB%C2%82%C2%B4%C3%AC%C2%84%C2%B1%C3%AA%C2%B0%C2%90%C3%AC%C2%86%C2%8C.jpg%7D) | <center>암속성 내성 다운 | 암속성 공격으로 부터의 피해 상승 및 속성 축적치 상승  |
      | <center>![st 회복속도 다운](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577284963_st%C3%AD%C2%9A%C2%8C%C3%AB%C2%B3%C2%B5%C3%AA%C2%B0%C2%90%C3%AC%C2%86%C2%8C.jpg%7D) | <center>ST 회복속도 다운 | 스태미너의 회복 속도가 감소 |
  </br>
  
  - **상태이상**
      
      
      | <center>아이콘 | <center>이름 | <center>효과 |
      | --- | --- | --- |
      | <center>![스턴](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577313676_%C3%AC%C2%8A%C2%A4%C3%AD%C2%84%C2%B4.jpg%7D) | <center>스턴 | 지속시간 동안 행동 불능 |
      | <center>![수면](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577324864_%C3%AC%C2%88%C2%98%C3%AB%C2%A9%C2%B4.jpg%7D) | <center>수면 | 자고있는 상태. 피해를 입을시 일어난다 |
      | <center>![독](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577334649_%C3%AB%C2%8F%C2%85.jpg%7D) | <center>독 | 독에 의한 지속 피해 |
      | <center>![도발](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577344883_%C3%AB%C2%8F%C2%84%C3%AB%C2%B0%C2%9C.jpg%7D) | <center>도발 | 특정 적을 계속 목표로 하는 상태 |
      | <center>![공포](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577355263_%C3%AA%C2%B3%C2%B5%C3%AD%C2%8F%C2%AC.jpg%7D) | <center>공포 | 대상에게서 도망치는 상태 |
      | <center>![어둠](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577363007_%C3%AC%C2%96%C2%B4%C3%AB%C2%91%C2%A0.jpg%7D) | <center>어둠 | 확률적으로 공격이 빗나가는 상태 |
      | <center>![스킬사용불가](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577371853_%C3%AC%C2%8A%C2%A4%C3%AD%C2%82%C2%AC%C3%AC%C2%82%C2%AC%C3%AC%C2%9A%C2%A9%C3%AB%C2%B6%C2%88%C3%AA%C2%B0%C2%80.jpg%7D) | <center>스킬 사용 불가 | 스킬 사용 불가 |
      | <center>![아이템 사용불가](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577381666_%C3%AC%C2%95%C2%84%C3%AC%C2%9D%C2%B4%C3%AD%C2%85%C2%9C%C3%AC%C2%82%C2%AC%C3%AC%C2%9A%C2%A9%C3%AB%C2%B6%C2%88%C3%AA%C2%B0%C2%80.jpg%7D) | <center>아이템 사용 불가 | 아이템 사용 불가 |
      | <center>![피로](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577390729_%C3%AD%C2%94%C2%BC%C3%AB%C2%A1%C2%9C.jpg%7D) | <center>피로 | 일정 시간 스태미너가 0인 상태 |
      | <center>![나포화](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577398197_%C3%AB%C2%82%C2%98%C3%AD%C2%8F%C2%AC%C3%AD%C2%99%C2%94.jpg%7D) | <center>나포화 | 나포로 변신하는 상태 |
      | <center>![구속](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577407951_%C3%AA%C2%B5%C2%AC%C3%AC%C2%86%C2%8D.jpg%7D) | <center>구속 | 위치에서 이동 불가 |
      | <center>![마비](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577421027_%C3%AB%C2%A7%C2%88%C3%AB%C2%B9%C2%84.jpg%7D) | <center>마비 | 일정 간격으로 스턴에 걸리는 상태 |
      | <center>![hp누설](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577430172_hp%20%C3%AB%C2%88%C2%84%C3%AC%C2%84%C2%A4.jpg%7D) | <center>HP 누설 상태 | 공격자가 HP를 회복하는 상태 |
  </br>
  
  - **특수상태**
      
      
      | <center>아이콘 | <center>이름 | <center>효과 |
      | --- | --- | --- |
      | <center>![허약](https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697577439089_%C3%AD%C2%97%C2%88%C3%AC%C2%95%C2%BD.jpg%7D) | <center>허약 | 리스폰 시의 상태 다운 |
      | <center>- | <center>실드 브레이크 | 방패가 없는 상태 |`,
  },
  {
    id: '무기 크래프트',
    content: `<center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697958101061_%C3%AB%C2%AC%C2%B4%C3%AA%C2%B8%C2%B0%20%C3%AD%C2%81%C2%AC%C3%AB%C2%9E%C2%98%C3%AD%C2%94%C2%84%C3%AD%C2%8A%C2%B81.jpg%7D" width="720"/>

  </br></br>
  </center>
  무기 제작 및 아이템 제작은 회전 연성의에서 가능합니다. 처음에는 기초적인 레시피만 주어지며, 게임을 플레이해나가며 더 많은 레시피들을 획득할 수 있습니다. 
  
  </br></br>
  
  > **무기 제작**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697958126455_%C3%AB%C2%AC%C2%B4%C3%AA%C2%B8%C2%B0%20%C3%AD%C2%81%C2%AC%C3%AB%C2%9E%C2%98%C3%AD%C2%94%C2%84%C3%AD%C2%8A%C2%B82.jpg%7D" width="720"/>
  
  </br></br>
  </center>
  
  | 1 | 현재 보유중인 제작 레시피들을 확인할 수 있습니다. |
  | --- | --- |
  | 2 | 선택중인 무기의 상세 정보를 표시합니다. </br>무기의 외형 및 능력치 등을 확인할 수 있습니다.</br></br>「추첨 확률 표시」에서는 특효나 소켓수의 추첨 확률이 표시됩니다.</br>「장비중 무기 비교」에서는 현재 장비중의 무기와의 성능을 비교할 수 있습니다. |
  | 3 | 선택한 무기를 제작하는데 필요한 재료들을 확인할 수 있습니다.</br></br>재료 아이템들은 필드 수집 및 퀘스트 보상 등으로 획득할 수 있습니다. </br>ⓘ 아이콘에 커서를 올려 해당 재료 아이템의 입수 방법을 확인할 수 있습니다. |
  | 4 | 크래프트시 대성공 확률 및 티켓을 사용하여 대성공 확률을 올릴 수 있습니다. </br></br>또한, 제작 횟수 및 제작 시 수납할 장소를 확인 및 변경할 수 있습니다. |
  
  </br></br>
  
  > **아이템 제작**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697958327387_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88%20-%20%C3%AC%C2%95%C2%84%C3%AC%C2%9D%C2%B4%C3%AD%C2%85%C2%9C%20%C3%AD%C2%81%C2%AC%C3%AB%C2%9E%C2%98%C3%AD%C2%94%C2%84%C3%AD%C2%8A%C2%B8.jpg%7D" width="720"/>
  
  </br></br>
  </center>
  
  | 1 | 현재 보유중인 제작 레시피들을 확인할 수 있습니다. |
  | --- | --- |
  | 2 | 선택중인 무기의 상세 정보를 표시합니다. </br>무기의 외형 및 능력치 등을 확인할 수 있습니다.</br></br>「추첨 확률 표시」에서는 특효나 소켓수의 추첨 확률이 표시됩니다.</br>「장비중 무기 비교」에서는 현재 장비중의 무기와의 성능을 비교할 수 있습니다. |
  | 3 | 선택한 무기를 제작하는데 필요한 재료들을 확인할 수 있습니다.</br></br>재료 아이템들은 필드 수집 및 퀘스트 보상 등으로 획득할 수 있습니다. </br>ⓘ 아이콘에 커서를 올려 해당 재료 아이템의 입수 방법을 확인할 수 있습니다. |
  | 4 | 크래프트시 대성공 확률 및 티켓을 사용하여 대성공 확률을 올릴 수 있습니다. </br></br>또한, 제작 횟수 및 제작 시 수납할 장소를 확인 및 변경할 수 있습니다. |
  
  </br></br>
  
  
  > **무기 강화**
  > 
  
  ---
  
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697958355233_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AB%C2%AC%C2%B4%C3%AA%C2%B8%C2%B0%20%C3%AA%C2%B0%C2%95%C3%AD%C2%99%C2%941.jpg%7D" width="720"/>
  
  </br></br>
  </center>
  
  
  무기에는 어빌리티 플러그라는 아이템을 장비하여 무기를 강화할 수 있습니다. 각 어빌리티 플러그에는 효과가 존재하며, 빈 소켓이 있는 무기에만 장착할 수 있습니다. 
  
  무기에 어빌리티 플러그를 장착하면 무작위로 정밀도가 결정됩니다. 정밀도가 높을수록 어빌리티 효과의 수치도 높아집니다.
  
  </br>
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697958369799_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AB%C2%AC%C2%B4%C3%AA%C2%B8%C2%B0%20%C3%AA%C2%B0%C2%95%C3%AD%C2%99%C2%942.jpg%7D" width="720"/>
  
  </br></br>
  </center>
  
  
  플러그 장착시, 해당 플러그의 정밀도를 변경할 수 있습니다. 
  
  튜닝은 무기에 장착된 모든 어빌리티 플러그가 추첨 대상이 됩니다. 또한 능력치를 유지하고자 하는 어빌리티 플러그가 있을 경우에는, 해당 어빌리티 플러그의 능력치가 추첨되지 않도록 유지할 수도 있습니다.
  
  ※무기 튜닝은 「튜닝 티켓」, 효과치 유지에는 「어빌리티 효과치 유지 티켓」을 소비합니다.
  
  
  </br>
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697958383904_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AB%C2%AC%C2%B4%C3%AA%C2%B8%C2%B0%20%C3%AA%C2%B0%C2%95%C3%AD%C2%99%C2%943.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  
  
  장착된 어빌리티 플러그를 제거할 수 있습니다.
  
  「어빌리티 플러그 회수 티켓」을 사용하면 해당 어빌리티 플러그를 회수할 수 있지만, 「어빌리티 플러그 제거 티켓」을 사용하면 어빌리티 플러그가 소멸해 버리므로 주의가 필요합니다.
  
  ※플러그 제거에는 「어빌리티 플러그 제거 티켓」을 소비합니다.
  
  </br>
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697958397017_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AB%C2%AC%C2%B4%C3%AA%C2%B8%C2%B0%20%C3%AA%C2%B0%C2%95%C3%AD%C2%99%C2%944.jpg%7D" width="720"/>
  
  </br></br>
  </center>
  
  
  무기 소켓을 추가할 수 있습니다.
  
  ※ 소켓 증설 시에는「무기 소켓 1 증설 티켓」이나 「무기 소켓 2 증설 티켓」 등, 무기의 소켓 증설 수에 따른 티켓이 필요합니다.`,
  },
  {
    id: '이매진 크래프트',
    content: `배틀 이매진 및 인핸스 이매진은 이매진 연구소에서 제작할 수 있습니다.

  무기 크래프트와 마찬가지로, 이매진을 제작하기 위해선 제작하려는 이매진의 레시피를 보유하고 있어야 합니다.
  
  </br></br>
  
  > **이매진 제작**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697958793706_%C3%AC%C2%9D%C2%B4%C3%AB%C2%A7%C2%A4%C3%AC%C2%A7%C2%84%20%C3%AD%C2%81%C2%AC%C3%AB%C2%9E%C2%98%C3%AD%C2%94%C2%84%C3%AD%C2%8A%C2%B8.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  
  | 1 | 제작 가능한 이매진들을 표시합니다. 제작 레시피를 획득할 경우 이곳에 추가되며, 제작 여부를 확인할 수도 있습니다. |
  | --- | --- |
  | 2 | 선택한 이매진의 상세 정보를 표시합니다. 이매진의 상징 및 스탯등을 확인할 수 있습니다. </br></br>배틀 이매진의 경우, 사용 효과 및 쿨타임 등의 정보도 확인할 수 있습니다.</br></br>「추첨 확률 표시」에서는 특효나 소켓수의 추첨 확률이 표시됩니다. |
  | 3 | 이매진을 제작하기 위한 재료들이 표시됩니다. </br>ⓘ 아이콘에 커서를 올려 해당 재료 아이템의 입수 방법을 확인할 수 있습니다. |
  | 4 | 제작에 필요한 루노 및 제작시 수납할 장소를 확인 및 변경할 수 있습니다. |`,
  },
  {
    id: '낚시',
    content: `교역도시 아스텔리즈 내에 존재하는 낚시터에서는 낚시를 할 수 있습니다. 
  낚시로 낚은 물고기는 매각하여 루노를 획득할 수 있으며 일정 확률로 물고기 이외의 아이템을 낚을 수 있습니다. 
  
  메인 퀘스트 「거룡의 발톱」클리어 후, 아스텔리즈 내의 NPC 안도르에게 말을 걸면, 낚시에 대해 배울 수 있는 튜토리얼 퀘스트 「너도 낚시꾼이 되지 않을까?」를 수주할 수 있습니다.
  
  </br>
  
  <span style="color:red">※낚시는 해당 퀘스트를 수주하지 않아도 할 수 있습니다.</span>
  
  
  </br></br>
  
  > 낚시 하는 법
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697959355529_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AB%C2%82%C2%9A%C3%AC%C2%8B%C2%9C1.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  
  1. 낚시터에 도착하면 낚시 상호작용이 나타납니다. [F]를 눌러 낚시를 시작할 수 있습니다.
  
  </br>\
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697959367670_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AB%C2%82%C2%9A%C3%AC%C2%8B%C2%9C2.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  
  2. 낚시를 시작하면 낚시 화면으로 전환됩니다. 좌클릭으로 캐스팅 할 수 있으며, [F]키로 낚시를 중단 할 수도 있습니다.
  
  </br></br>
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697959379563_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AB%C2%82%C2%9A%C3%AC%C2%8B%C2%9C3.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  
  3. 캐스팅을 하고 난 후, 물고기가 걸릴 때까지 기다립니다. 만약 물고기가 걸리면 “!” 마크가 표시되며 좌클릭으로 후킹할 수 있습니다.
  
  </br></br>
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697959403520_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AB%C2%82%C2%9A%C3%AC%C2%8B%C2%9C4.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  
  4. 타이밍을 맞춰 후킹을 하면 “걸렸다!” 라고 표시되며 릴을 감을 수 있게 됩니다. 만약 후킹이 너무 늦었다면, 물고기가 도망가게 됩니다. </br></br>릴은 좌클릭으로 감을 수 있으며, [A]키와 [D]키를 이용해 낚싯대를 좌/우로 움직일 수 있습니다. </br> 낚싯대의 방향과 물고기의 위치가 일치되게 움직인 후, 릴을 감으면 됩니다.
  
  </br></br>
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697959420512_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AB%C2%82%C2%9A%C3%AC%C2%8B%C2%9C6.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  
  5. 후킹 시, 낚시줄의 텐션 게이지를 확인할 수 있습니다. </br></br>
   낚싯대를 좌/우로 움직여 물고기와의 거리를 좁히면, 텐션 게이지를 낮출 수 있습니다.</br>
  텐션 게이지가 0% 또는 100%의 상태가 지속되면 물고기가 도망가 버리므로, 텐션 게이지를 관리하며 릴을 감아 물고기를 끌어 올려야 합니다. </br>
  </br> 릴을 감을 수록 텐션 게이지의 물고기 아이콘이 좌측으로 움직이며, 좌측 끝에 도달하면 낚시에 성공하게 됩니다.`,
  },
  {
    id: '레이드 미션',
    content: `레이드 미션이란, 최대 30명의 캐릭터가 참가하여 거대한 보스 몬스터에게 도전할 수 있는 미션 입니다. 

  레이드 미션에 출현하는 레이드 보스는 통상적으로 등장하는 보스 몬스터나 필드에 존재하는 네임드 몬스터들 보다 훨씬 강력한 몬스터입니다. 
  
  </br></br>
  
  > **레이드 미션 참가**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697959579253_%C3%AB%C2%A0%C2%88%C3%AC%C2%9D%C2%B4%C3%AB%C2%93%C2%9C%20%C3%AB%C2%AF%C2%B8%C3%AC%C2%85%C2%98.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  </br>
  
  레이드 미션은 각 지역에 흩어져 있는 「성맥공」에서 참가할 수 있습니다.
  
  성맥공을 조사 할 시, 레이드 미션의 세부 정보가 표시됩니다. 준비가 모두 끝났다면 매칭 신청을 눌러 매칭을 시작할 수 있습니다.
  
  </br>
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697959518893_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AB%C2%A0%C2%88%C3%AC%C2%9D%C2%B4%C3%AB%C2%93%C2%9C%20%C3%AB%C2%AF%C2%B8%C3%AC%C2%85%C2%981.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  </br>
  
  | 1 | 개최 기간을 확인할 수 있습니다. |
  | --- | --- |
  | 2 | 미션의 이름 및 클리어 조건을 확인할 수 있습니다. |
  | 3 | 최대 도전 인원수, 제한 시간, 레벨 싱크와 지급 아이템 등을 확인할 수 있습니다. |
  | 4 | 입장 조건을 확인할 수 있습니다. |
  | 5 | 기본 보상을 확인할 수 있습니다. |
  | 6 | 현재 캐릭터의 기본 정보 및 보상 플러스 수령 횟수와 수령횟수 추가 티켓의 소지수를 확인할 수 있습니다. |
  
  </br></br>
  
  > **전투 인터페이스**
  > 
  
  ---
  
  레이드 미션은 최대 30명의 캐릭터와 거대한 보스 몬스터의 전투로 진행되기 때문에, 일반적인 전투 인터페이스와는 사뭇 다른 형태의 화면을 확인하실수 있습니다.
  
  </br>
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697959592365_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AB%C2%A0%C2%88%C3%AC%C2%9D%C2%B4%C3%AB%C2%93%C2%9C%20%C3%AB%C2%AF%C2%B8%C3%AC%C2%85%C2%982.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  </br>
  
  | 1 | 레이드 보스의 이름 및 잔여 HP, 속성 축적치 및 상태이상을 확인할 수 있습니다. |
  | --- | --- |
  | 2 | 레이드 미션의 남은 시간 및 전체 부활 횟수를 확인할 수 있습니다.  |
  | 3 | 파티원들의 이름 및 잔여 HP를 확인할 수 있습니다. |
  
  </br></br>
  
  > **엔그램 캐논**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697959607918_%C3%AB%C2%A0%C2%88%C3%AC%C2%9D%C2%B4%C3%AB%C2%93%C2%9C%20%C3%AB%C2%AF%C2%B8%C3%AC%C2%85%C2%982.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  </br>
  
  레이드 미션 필드 내엔 「엔그램 캐논」 이라는 장치가 3곳에 배치되어 있습니다. 엔그램 캐논은 일정 시간의 충전이 끝나게 되면, </br>파랗게 빛나게 되며 캐릭터가 탑승할 수 있게 됩니다. 
  
  엔그램 캐논에서 발사되는 포격은 레이드 보스에게 치명타를 입힐수 있기에 적극적으로 사용하는 것이 좋습니다. 
  
  엔그램 캐논이 붉은빛을 띈다면, 해당 캐논은 충전중이며 탑승이 불가능합니다. 
  
  </br></br>
  
  > **결과창**
  > 
  
  ---
  
  <center><img src="https://blueprotocol-mury.s3.ap-northeast-2.amazonaws.com/1697959620864_%C3%AC%C2%9D%C2%BC%C3%AB%C2%B3%C2%B8%20%C3%AA%C2%B3%C2%B5%C3%AD%C2%99%C2%88-%20%C3%AB%C2%A0%C2%88%C3%AC%C2%9D%C2%B4%C3%AB%C2%93%C2%9C%20%C3%AB%C2%AF%C2%B8%C3%AC%C2%85%C2%983.jpg%7D" width="720"/>
  
  </br>
  </center>
  </br>
  </br>
  
  전투가 종료된 후, 결과창 에서는 자신의 기여도 및 보상의 내용을 확인할 수 있습니다. 전투 기여도에 따라 순위가 매겨지며, 상위에 랭크된다면 추가 보상이 존재합니다.`,
  },
];

export default gameContents;
