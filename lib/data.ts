import type { Post } from "./types"

// 샘플 데이터
const samplePosts: Post[] = [
  {
    id: "1",
    title: "파리의 숨겨진 카페들",
    content:
      '파리에는 관광객들이 잘 모르는 현지인들만 아는 숨겨진 카페들이 많습니다. 이번 여행에서 발견한 몇 곳을 소개합니다. 몽마르트 언덕 근처에 위치한 작은 카페 "Le Petit Parisien"은 아침 일찍 문을 열어 갓 구운 크루아상과 함께 진한 에스프레소를 즐길 수 있습니다. 센 강변의 "Café des Artistes"는 예술가들이 자주 찾는 곳으로, 벽면에는 지역 예술가들의 작품이 전시되어 있습니다. 마레 지구의 "La Bicyclette"는 빈티지한 자전거 테마로 꾸며진 카페로, 유기농 재료로 만든 브런치 메뉴가 특히 인기입니다.',
    author: "김여행",
    date: new Date("2023-05-15"),
    tags: ["유럽", "파리", "카페", "현지맛집"],
  },
  {
    id: "2",
    title: "교토의 봄, 벚꽃 명소 5곳",
    content:
      "일본 교토의 봄은 벚꽃으로 가득합니다. 이번 포스팅에서는 교토에서 꼭 가봐야 할 벚꽃 명소 5곳을 소개합니다. 철학의 길은 교토에서 가장 유명한 벚꽃 산책로로, 약 2km에 걸쳐 벚꽃나무가 늘어서 있습니다. 마루야마 공원은 교토에서 가장 오래된 공공 공원으로, 밤에는 라이트업된 벚꽃을 감상할 수 있습니다. 니조성의 벚꽃은 역사적인 배경과 함께 더욱 아름답게 빛납니다. 가모강 주변은 피크닉을 즐기기에 완벽한 장소이며, 헤이안 신궁의 정원은 조용히 벚꽃을 감상하기 좋은 곳입니다.",
    author: "벚꽃사냥꾼",
    date: new Date("2023-04-02"),
    tags: ["아시아", "일본", "교토", "벚꽃", "봄여행"],
  },
  {
    id: "3",
    title: "배낭 하나로 떠난 동남아 한 달 살기",
    content:
      "최소한의 짐으로 동남아시아를 한 달 동안 여행한 경험을 공유합니다. 태국 방콕에서 시작해 치앙마이, 라오스 루앙프라방, 베트남 하노이와 호이안, 캄보디아 씨엠립까지 이어지는 여정이었습니다. 7kg 배낭 하나로 여행하면서 배운 미니멀리즘의 교훈과 각 지역에서 만난 현지인들과의 교류, 그리고 저렴하게 여행하는 팁들을 소개합니다. 특히 현지 시장에서 식사하는 방법, 호스텔 대신 홈스테이를 이용하는 방법, 그리고 현지 교통수단을 이용하는 방법 등 실용적인 정보를 담았습니다.",
    author: "배낭여행자",
    date: new Date("2023-03-10"),
    tags: ["동남아시아", "배낭여행", "한달살기", "미니멀여행"],
  },
  {
    id: "4",
    title: "산토리니에서의 완벽한 하루",
    content:
      "그리스 산토리니에서 보낸 완벽한 하루 일정을 소개합니다. 이아(Oia)에서 일출을 감상하는 것으로 하루를 시작해, 피라(Fira)까지 절벽 산책로를 따라 걸으며 에게해의 파노라마 뷰를 즐겼습니다. 점심은 현지 어부들이 추천한 작은 태번에서 신선한 해산물을 맛보았고, 오후에는 레드 비치와 블랙 비치에서 수영을 즐겼습니다. 저녁에는 다시 이아로 돌아와 세계적으로 유명한 산토리니 일몰을 감상했습니다. 산토리니의 화이트&블루 건축물, 맛있는 그리스 요리, 그리고 따뜻한 현지인들의 환대는 잊을 수 없는 추억이 되었습니다.",
    author: "지중해러버",
    date: new Date("2023-06-20"),
    tags: ["유럽", "그리스", "산토리니", "섬여행"],
  },
  {
    id: "5",
    title: "뉴욕 브루클린의 힙스터 명소들",
    content:
      "뉴욕 브루클린은 이제 맨해튼 못지않게 여행자들에게 인기 있는 지역이 되었습니다. 특히 윌리엄스버그와 부쉬윅 지역은 힙스터 문화의 중심지로, 독특한 카페, 브루어리, 빈티지 상점, 스트리트 아트 등을 즐길 수 있습니다. 이번 포스팅에서는 브루클린의 주요 힙스터 명소들을 소개합니다. 스미스가(Smith Street)의 독립 서점들, 브루클린 플리 마켓에서의 빈티지 쇼핑, 로컬 크래프트 맥주를 맛볼 수 있는 브루어리 투어, 그리고 부쉬윅 콜렉티브의 스트리트 아트 투어까지, 브루클린의 진짜 매력을 느낄 수 있는 장소들을 담았습니다.",
    author: "도시여행자",
    date: new Date("2023-07-05"),
    tags: ["미국", "뉴욕", "브루클린", "도시여행", "힙스터"],
  },
  {
    id: "6",
    title: "페루 마추픽추 트레킹 가이드",
    content:
      "잉카 문명의 신비로운 유적지 마추픽추로 가는 트레킹 경로와 준비물, 그리고 현지 팁을 상세히 안내합니다. 클래식 잉카 트레일은 4일 코스로, 사전 예약이 필수입니다. 살캔타이 트레일은 잉카 트레일의 대안으로 예약 없이도 가능하며, 더 높은 고도를 경험할 수 있습니다. 라레스 트레일은 현지 마을들을 지나는 문화적 경험이 풍부한 코스입니다. 고산병 예방을 위한 쿠스코에서의 적응 기간, 우기와 건기의 차이, 가이드 선택 팁, 그리고 마추픽추에서 꼭 봐야 할 명소들까지 실용적인 정보를 담았습니다.",
    author: "트레커",
    date: new Date("2023-02-18"),
    tags: ["남미", "페루", "마추픽추", "트레킹", "모험여행"],
  },
]

export async function getPosts(): Promise<Post[]> {
  // 실제 API 호출 대신 샘플 데이터 반환
  return samplePosts
}

export async function getPostById(id: string): Promise<Post | undefined> {
  // 실제 API 호출 대신 샘플 데이터에서 검색
  return samplePosts.find((post) => post.id === id)
}
