window.WEDDING_GUESTBOOK_ENDPOINT = "https://script.google.com/macros/s/AKfycbyLyRKn1I8H6iJT7OucN3hii8xYJZeYW27w-lBTuL-ZHkJKFKv0MF9HYT5WEm33pdU/exec";
// Đường dẫn tương đối tới file nhạc trong thư mục music.
window.WEDDING_MUSIC_URL = "music/chuynn.mp3";
window.WEDDING_MAP_URL = "https://www.google.com/maps?q=20.8318230,105.8057480&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,100821555,47071704,94218641,94282134,100835694,94286869,100820247,100822504,100838877,121816461&g_ep=CAISEjI2LjQwLjMuOTg5Mjk1MzUwMBgAIIgnKnssOTQyOTc2OTksOTQyMzExODgsOTQyODA1NjgsMTAwODIxNTU1LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDEwMDgzNTY5NCw5NDI4Njg2OSwxMDA4MjAyNDcsMTAwODIyNTA0LDEwMDgzODg3NywxMjE4MTY0NjFCAlZO&skid=7695b9a8-a29f-4cb9-bf40-e122cf705a73&g_st=ic&g_st=ic";

// Sửa thông tin thiệp tại đây. Với các đoạn văn bên dưới, giữ nguyên "match"
// và chỉ sửa nội dung trong "text".
window.WEDDING_INFO = {
  pageTitle: "Thiệp cưới Ngọc Vân & Trung Tuyển",
  coverHeading: "WEDDING INVITATION",
  invitationHeading: "Thiệp mời cưới",
  brideShortName: "Ngọc Vân",
  groomShortName: "Trung Tuyển",
  invitationSectionHeading: "INVITATION",
  groomParentsHeading: "Nhà Trai",
  groomFather: "Ông: Nguyễn Trung Tuyến",
  groomMother: "Bà : Lê Thị Xuân",
  brideParentsHeading: "Nhà Gái",
  brideFather: "Ông : Nghiêm Phú Thắng",
  brideMother: "Bà : Vũ Thị Thảo",
  brideFullName: "Nghiêm Ngọc Vân",
  groomFullName: "Nguyễn Trung Tuyển",
  brideHometown: "TP. Hà Nội",
  groomHometown: "TP. Hà Nội",
  receptionTitle: "Tiệc mừng lễ thành hôn",
  ceremonyTime: "Vào lúc 10:00 chủ nhật",
  monthLabel: "Tháng 10",
  weddingDay: "25",
  lunarDate: "(Tức ngày 16 tháng 9 âm Bính Ngọ)",
  venueName: "nhà riêng",
  venueAddress: "Số nhà 1, ngõ Thượng 5, xóm 6, thôn Tri Lễ, Xã Dân Hoà, Hà Nội",
  venueAddressDisplay: "Số nhà 1, ngõ Thượng 5, xóm 6, thôn Tri Lễ,\nXã Dân Hoà, Hà Nội",
  brideBirthDate: "24/05/2000",
  groomBirthDate: "20/10/1999",
  brideProfileHometown: "TP. Hà Nội",
  groomProfileHometown: "TP. Hà Nội",
  brideProfileLabel: "Bride",
  groomProfileLabel: "Groom",
  
  // Thông báo cảm ơn
  wishThankYouText: "Cảm ơn bạn đã gửi lời chúc tốt đẹp nhất đến chúng mình!",
  rsvpThankYouText: "Cảm ơn bạn đã phản hồi. Hẹn gặp bạn tại đám cưới nhé!",
  rsvpDeclineThankYouText: "Cảm ơn bạn đã phản hồi. Chúng mình tiếc vì bạn không thể tham dự và mong sẽ gặp bạn dịp khác!",

  // --- 
  // Swap icons in Save the Date to match the new scheduleItems order
  // 1: Khai tiệc (Plates)
  // 2: Lễ Rước Dâu (Rings)
  // 3: Chụp hình (Camera)
  _setupIcons: (() => {
    if (typeof document !== 'undefined') {
      const s = document.createElement("style");
      s.innerHTML = `
        div[data-node-id="vn8LzVP4iL"] .photo-bg-wrap { background-image: url('images/p9r9hqnxqhoep7qg3x6ytf.png') !important; }
        div[data-node-id="cYR1ro10__"] .photo-bg-wrap { background-image: url('images/q7j7fdbewu8o975g6btq9g.png') !important; }
        div[data-node-id="WM1IYthsws"] .photo-bg-wrap { background-image: url('images/w4x2kkenv6f8ij6j6n44g3.png') !important; }
        
        div[data-node-id="vn8LzVP4iL"]:not([data-transition-key]) { left: 166px !important; }
        div[data-node-id="cYR1ro10__"]:not([data-transition-key]) { left: 170.3px !important; }
        div[data-node-id="WM1IYthsws"]:not([data-transition-key]) { left: 167.3px !important; }
        div[data-node-id="ft6eqnvLg8"]:not([data-transition-key]),
        div[data-node-id="6D0znjfSq8"]:not([data-transition-key]),
        div[data-node-id="SJRSSa34BV"]:not([data-transition-key]) {
          left: 203.65px !important;
        }
        div[data-node-id="4Q3-6-pwwI"]:not([data-transition-key]),
        div[data-node-id="pr66tJKC64"]:not([data-transition-key]),
        div[data-node-id="scGhyU0cqJ"]:not([data-transition-key]) {
          left: 250px !important;
          width: 230px !important;
        }
        div[data-node-id="4Q3-6-pwwI"] [contenteditable="false"],
        div[data-node-id="pr66tJKC64"] [contenteditable="false"],
        div[data-node-id="scGhyU0cqJ"] [contenteditable="false"] {
          text-align: left !important;
        }
        div[data-node-id="6D0znjfSq8"]:not([data-transition-key]),
        div[data-node-id="cYR1ro10__"]:not([data-transition-key]),
        div[data-node-id="pr66tJKC64"]:not([data-transition-key]) {
          transform: translateY(8.5px) !important;
        }
        div[data-node-id="SJRSSa34BV"]:not([data-transition-key]),
        div[data-node-id="WM1IYthsws"]:not([data-transition-key]),
        div[data-node-id="scGhyU0cqJ"]:not([data-transition-key]) {
          transform: translateY(4px) !important;
        }
      `;
      document.head.appendChild(s);
    }
  })(),
  // ---
  // Tùy chỉnh kích cỡ chữ tên Cô Dâu & Chú Rể phần About Us
  aboutUsNameFontSize: "14px",

  scheduleHeading: "Save the date",
  scheduleMonthYear: "2026 / Oct",
  scheduleItems: [
    "10:30 : Khai tiệc",
    "13:15 : Lễ Rước Dâu",
    "14:30: Chụp hình lưu niệm",
  ],
  //brideBankDetails: "MB Bank : 012345678",
  //groomBankDetails: "MB Bank : 012345678",
  calendarYearLabel: "NĂM 2026",
  mapButtonLabel: "Xem đường đi",
};

window.WEDDING_TEXT_REPLACEMENTS = [
  {
    label: "Lời chào",
    match: "Gửi đến gia đình và bạn bè thân mến,",
    text: "Gửi đến gia đình và bạn bè thân mến,",
  },
  {
    label: "Lời cảm ơn",
    match:
      "Cảm ơn bạn đã dành thời gian quý báu để cùng chúng mình chung vui trong ngày đặc biệt này. Chúng mình vô cùng biết ơn vì luôn có sự đồng hành và ủng hộ của bạn, và thật vinh hạnh khi được chia sẻ niềm hạnh phúc của chúng mình cùng bạn.",
    text:
      "Cảm ơn bạn đã dành thời gian quý báu để cùng chúng mình chung vui trong ngày đặc biệt này. Chúng mình vô cùng biết ơn vì luôn có sự đồng hành và ủng hộ của bạn, và thật vinh hạnh khi được chia sẻ niềm hạnh phúc của chúng mình cùng bạn.",
  },
  {
    label: "Lời mời",
    match: "Trân trọng kính mời bạn đến dự lễ cưới của chúng mình",
    text: "Trân trọng kính mời bạn đến dự lễ cưới của chúng mình",
  },
  {
    label: "Lời nhắn cuối thiệp",
    match:
      "Mình rất muốn được chụp chung với bạn những tấm hình kỷ niệm vì vậy hãy đến sớm hơn một chút bạn yêu nhé! Đám cưới của chúng mình sẽ trọn vẹn hơn khi có thêm lời chúc phúc và sự hiện diện của các bạn",
    text:
      "Mình rất muốn được chụp chung với bạn những tấm hình kỷ niệm vì vậy hãy đến sớm hơn một chút bạn yêu nhé! Đám cưới của chúng mình sẽ trọn vẹn hơn khi có thêm lời chúc phúc và sự hiện diện của các bạn",
  },
  { label: "Tiêu đề lễ", match: "Thành", text: "Thành" },
  { label: "Tiêu đề lễ", match: "Hôn", text: "Hôn" },
  { label: "Câu trang trí", match: "SWEET WEDDING", text: "SWEET WEDDING" },
  { label: "Câu trang trí", match: "marry", text: "marry" },
  { label: "Câu trang trí", match: "me?", text: "me?" },
  { label: "Câu trang trí", match: "yes", text: "yes" },
  { label: "Nút quà mừng", match: "gửi quà mừng", text: "gửi quà mừng" },
  { label: "Tiêu đề hồ sơ", match: "About us", text: "About us" },
  {
    label: "Chữ trang trí",
    match: "I love you forever",
    text: "I love you forever",
  },
  {
    label: "Chữ trang trí",
    match: "Nice to meet you",
    text: "Nice to meet you",
  },
  { label: "Nhãn cô dâu", match: "Cô dâu", text: "Cô dâu" },
  { label: "Nhãn chú rể", match: "Chú rể", text: "Chú rể" },
  { label: "Lời cảm ơn cuối thiệp", match: "Thank you", text: "Thank you" },
  {
    label: "Hướng dẫn mở thiệp",
    match: "Chạm để mở thiệp",
    text: "Chạm để mở thiệp",
  },
  {
    label: "Tiêu đề xác nhận tham dự",
    match: "Xác nhận tham dự",
    text: "Xác nhận tham dự",
  },
  { label: "Nhãn họ tên", match: "Họ và tên", text: "Họ và tên" },
  {
    label: "Câu hỏi tham dự",
    match: "Bạn sẽ tham dự chứ?",
    text: "Bạn sẽ tham dự chứ?",
  },
  {
    label: "Lựa chọn tham dự",
    match: "Có, tôi sẽ tham dự",
    text: "Có, tôi sẽ tham dự",
  },
  {
    label: "Lựa chọn từ chối",
    match: "Tôi bận, rất tiếc không thể tham dự",
    text: "Tôi bận, rất tiếc không thể tham dự",
  },
  {
    label: "Nhãn số lượng khách",
    match: "Số lượng người tham dự",
    text: "Số lượng người tham dự",
  },
  ...Array.from({ length: 10 }, (_, index) => ({
    label: "Lựa chọn số lượng khách",
    match: `${index + 1} người`,
    text: `${index + 1} người`,
  })),
  { label: "Nhãn nút gửi RSVP", match: "Gửi xác nhận", text: "Gửi xác nhận" },
  { label: "Đơn vị đếm ngày", match: "ngày", text: "ngày" },
  { label: "Đơn vị đếm giờ", match: "giờ", text: "giờ" },
  { label: "Đơn vị đếm phút", match: "phút", text: "phút" },
  { label: "Đơn vị đếm giây", match: "giây", text: "giây" },
];

window.WEDDING_PHOTO_FILES = {
  "0660702c-af3c-42e6-8978-b23bf1e51c39.jpg": "images/anh1.jpg",
  "1d098419-b484-480d-b04b-7474a34aebf0.png": "images/anh2.png",
  "37877611-5c5b-4643-834b-e9757c0d48d6.jpg": "images/anh3.jpg",
  "518b1a1e-e31e-4733-8d27-d3c81b90a3ce.jpg": "images/anh4.jpg",
  "8ae958e7-d30a-4200-b1f3-187c1f95cda2.jpg": "images/anh5.jpg",
  "9881034c-0645-4b24-9855-f600d9426515.jpg": "images/anh6.jpg",
  "7e576579-ef79-493a-ae38-702d72a11170.jpg": "images/anh7.jpg",
  "9a1e2fa8-7139-4191-9205-54eb6027ee1e.jpg": "images/anh8.jpg",
  "9d1297eb-5afd-4986-9345-b32439fa3c91.jpg": "images/anh9.jpg",
  "c4d45265-947c-414c-b53f-f291586faeea.jpg": "images/anh10.jpg",
  "f9a1916a-869c-4bc2-b2c1-f01b95c3729a.png": "images/anh11.png",
};

const weddingPageTitle = String(window.WEDDING_INFO?.pageTitle || "").trim();
if (weddingPageTitle) {
  const titleDescriptor = Object.getOwnPropertyDescriptor(
    Document.prototype,
    "title"
  );
  if (
    titleDescriptor?.configurable &&
    titleDescriptor.get &&
    titleDescriptor.set
  ) {
    Object.defineProperty(Document.prototype, "title", {
      configurable: titleDescriptor.configurable,
      enumerable: titleDescriptor.enumerable,
      get: titleDescriptor.get,
      set() {
        titleDescriptor.set.call(this, weddingPageTitle);
      },
    });
    document.title = weddingPageTitle;
  }
}
