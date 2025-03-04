let button;

function setup() {
  createCanvas(400, 300);

  button = createButton("Hover Me!");
  button.position(100, 100);
  
  // 🔹 버튼 스타일
  button.style("background", "#8e44ad");
  button.style("color", "white");
  button.style("padding", "10px 20px");
  button.style("border", "none");
  button.style("font-size", "16px");
  button.style("border-radius", "5px");
  button.style("cursor", "pointer");
  button.style("transition", "transform 0.2s ease, background 0.3s ease");

  // 🔹 버튼 인터랙션 (애니메이션 추가)
  button.mouseOver(() => {
    button.style("background", "#9b59b6");
    button.style("transform", "scale(1.1)"); // 크기 확대
  });

  button.mouseOut(() => {
    button.style("background", "#8e44ad");
    button.style("transform", "scale(1)"); // 원래 크기로 복귀
  });

  button.mousePressed(() => button.style("transform", "scale(0.9)")); // 클릭 시 축소
  button.mouseReleased(() => button.style("transform", "scale(1.1)")); // 클릭 해제 후 다시 확대
}
