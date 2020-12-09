# CauseEffect

Patterns are integral to software engineering and represent potentially reusable components in program logic. However, patterns aren't used only for program logic, they are exist in other domains such as DevOps, user support, and the user interface.

흔한 인터페이스 패턴은 하나의 섹션에 특정 타입의 리스트로 이루어진 데이터를 요약하고 카테고라이즈화 해 보여주고, 리스트 아이템이 클리되면 디테일 데이터가 인접한 창에 나타나는 것이다.

For example, on a real estate site clicking an address in a list of properties for sale displays the details about the property in another part of the page.

This challenge requires that the developer implementing it follow these constraints:

- [x] You are responsible for creating your own test data. Use a hardcoded Javascript object to define your test data (see below).
- [x] Use only native HTML/CSS/Javascript in your first version of this app
- [x] You may use other packages or libraries when implementing subsequent versions.

### User Stories

- [x] User can see a list of person names arranged vertically in a summary pane on the page.
- [x] User can click on a name in the list to update an adjacent pane on the page with that individuals full name, address, telephone number, and birthday.
- [x] User can click on another name in the list to refresh the detail pane with that individuals information.

### Bonus features

- [x] User can see the person name in the summary pane highlighted when the cursor is hovered over it.
- [x] User can see the person name in the summary pane highlighted using a selection effect (color, size, etc.) when it is clicked. This is a different effect from the hover effect
- [x] User can see the selection effect removed from a name in the summary list when a new name is clicked.

```js
const people = [
{name: "...", street: "...", city: "...", state: "...", country: "...", telephone: "...", birthday: "..."},
.
.
.
{name: "...", street: "...", city: "...", state: "...", country: "...", telephone: "...", birthday: "..."}
];

```
