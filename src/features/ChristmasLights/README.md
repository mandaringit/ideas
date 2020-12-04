# Christmas Lights

The ChristmasLights application relies on your development talents to create a mesmerizing light display. Your task is to draw seven colored circles in a row and based on a timer change the intensity of each circle. When a circle is brightened it's predecessor returns to its normal intensity.

This simulates the effect of a string of rippling lights, similar to the ones displayed during the Christmas Holidays.

## User Stories

- [] User can press a button to start and stop the display
- [] User can change the interval of time controlling the change in intensity

## Bonus features

- [] User can select the color used to fill each circle
- [] User can specify the intensity value
- [] User can change the size of any circle in the row
- [] User can specify the number of rows to be included in the display. From one to seven rows can be chosen

## 배운것

### CSS KeyFrame

애니메이션 효과를 키프레임을 통해 주는 방법을 배웠다. `@keyframes` 로 키워드를 주고, 이름을 선언한 뒤 0% ~ 100% 중간중간 효과를 주거나, from - to로 효과를 줄 수 있다.

```css
@keyframes ani1 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes ani2 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

0% ~ 표기한 최대% 로, animation 속성에 설정한 시간만큼 비율을 나눠 움직인다. 이렇게 만든 키프레임을 적용하려면 해당 태그에 속성으로 animation을 주자.

```css
.sample {
  /* ani1 효과를 3초동안 지속적으로 + 번갈아가면서 보여줘라.*/
  animation: ani1 3s infinite alternate;
}
```

### 참고

- [@keyframes](https://developer.mozilla.org/ko/docs/Web/CSS/@keyframes)
- [animation](https://developer.mozilla.org/ko/docs/Web/CSS/animation)
- [CSS 애니메이션 초보자 입문서](https://webdesign.tutsplus.com/ko/tutorials/a-beginners-introduction-to-css-animation--cms-21068)
