/**
 * Overloading
 *
 * 오버로딩은 코드가 복잡해질 수 있으므로 사용이 지양되지만 오버로딩 문법을 사용하는 코드를 읽을 수 있어야 하므로 알아두어야 함
 */

/**
 * 파라미터를
 * 1) 한 개만 받거나
 * 2) 세 개를 받는 함수
 */
/**
 * 만약 하나의 파라미터만 입력받으면 아이돌 멤버들을 하나의 문자열로 입력받기
 * 예) '안유진, 장원영, 레이'
 *
 * 만약 세 개의 파라미터를 입력받으면 아이돌 각각을 각각의 파라미터 값으로 입력받기
 * 예) '안유진', '장원영', '레이'
 */

// 파라미터를 한 개만 받거나 세 개만 받기(오버로딩)
// 함수 이름이 같아야 함
// 오버로딩 시그니처 함수
//    함수 바디가 존재하지 않음
//    함수 시그니처(파라미터, 파라미터 타입, 리턴 타입)만 정의
function stringOrStrings(members: string): string; // 파라미터를 한 개만 받는 경우
function stringOrStrings( // 파라미터 세 개를 받는 경우
  member1: string,
  member2: string,
  member3: string
): string;

// 오버로딩 구현체 함수에서 구현 가능한 오버로딩 시그니처만 사용 가능
//    구현체 함수에서 구현할 수 없으면 오버로딩 시그니처로 사용 불가능
//    아래 구현체 함수의 경우 첫 번째 파라미터가 필수적이기 때문에 아무 파라미터도 없는 시그니처는 사용할 수 없음
// function stringOrStrings(): string;

// 오버로딩 구현체 함수
//    오버로딩 시그니처 함수의 파라미터 이름과 같을 필요는 없음
//    오버로딩 시그니처 함수와 파라미터 순서만 같으면 됨
//    구현체 함수는 오버로딩 시그니처 함수를 오버로딩 가능하지만 오버로딩 시그니처 함수의 시그니처를 사용해야 함
function stringOrStrings(
  memberOrMembers: string,
  member2?: string,
  member3?: string
) {
  if (member2 && member3) {
    return `아이브: ${memberOrMembers}, ${member2}, ${member3}`;
  } else {
    return `아이브: ${memberOrMembers}`;
  }
}
console.log(stringOrStrings("안유진, 장원영, 레이"));
console.log(stringOrStrings("안유진", "장원영", "레이"));
// console.log(stringOrStrings("안유진", "장원영")); // 에러: stringOrStrings 함수는 파라미터를 한 개 또는 세 개를 받는 함수이므로

// 🔴오버로딩 문법의 단점
//    타입스크립트에만 존재하고 자바스크립트에는 존재하지 않는 문법
//    따라서 자바스크립트로 컴파일되면 오버로딩 문법은 삭제됨
//    자바스크립트 코드를 보면 어떤 코드인지 헷갈릴 수 있으므로 사용이 권장되지 않음
//    코드가 복잡해질 수 있으므로 다른 역할의 함수를 여러 개 선언해서 사용하는 것이 유지보수에 편리할 수 있음
//    오버로딩 구현은 개발자의 선택
