import DucklabLogo from "@/public/ducklab_logo.svg";
import DeemiLogo from "@/public/deemmi_logo.svg";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const imageUrl = "https://funcslash.com/flynary/image";
const infographicUrl = "infographic";
const logoUrl = "logo";
const profileUrl = "profile";
const projectInfoUrl = "projectInfo";
const keyFunctionUrl = "keyFunction";
const screenshotsUrl = "screenshots";
const coverUrl = "infographic/cover";
const insightCover = "interview/cover";
const keynoteCover = "keynote/cover";
const designInfographicUrl = "infographic/design";
const devInfographicUrl = "infographic/dev";
const testUrl = "test/";

const type = ["Interactive Media", "Web Application", "Mobile Application"];

const advisor = [
  "อาจารย์รักชนก สุขะกาลนันท์",
  "อาจารย์พสุพงษ์ ประเสริฐรุ่งเรือง",
  "อาจารย์ณัฐวุฒิ เลื่อนไธสง",
  "อาจารย์ขจรพล หิรัญโชติไพศาล",
  "รศ. ดร.กันย์พัชญ์ กะลัมพะเหติ",
  "อาจารย์กิตตินนท์ อุ้ยวงค์ไพศาล",
  "อาจารย์ณัฐพงศ์ มาเสถียร",
  "อาจารย์โกวิท มีบุญ",
];

const tools = [
  {
    id: 1,
    name: "Behance",
    logo: "https://cdn.worldvectorlogo.com/logos/behance-1.svg",
    url: "https://www.behance.net/",
    description:
      "แพลตฟอร์มโซเชียลมีเดียสำหรับนักสร้างสรรค์เพื่อแสดงผลงาน (Portfolio) และค้นหาแรงบันดาลใจจากทั่วโลก",
  },
  {
    id: 2,
    name: "Figma",
    logo: "https://images.icon-icons.com/2429/PNG/512/figma_logo_icon_147289.png",
    url: "https://www.figma.com/",
    description:
      "เครื่องมือออกแบบ UI/UX ยอดนิยมที่ทำงานบนคลาวด์ สามารถออกแบบและทำงานร่วมกับทีมได้แบบเรียลไทม์",
  },
  {
    id: 3,
    name: "Dribbble",
    logo: "https://static.vecteezy.com/system/resources/previews/023/986/617/non_2x/dribbble-logo-dribbble-logo-transparent-dribbble-icon-transparent-free-free-png.png",
    url: "https://dribbble.com/",
    description:
      "ชุมชนออนไลน์สำหรับนักออกแบบเพื่อแชร์ผลงานขนาดเล็ก (Shots) และรับฟีดแบค เป็นแหล่งหาแรงบันดาลใจชั้นดี",
  },
  {
    id: 4,
    name: "Pinterest",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    url: "https://www.pinterest.com/",
    description:
      "แหล่งค้นหาไอเดียด้วยภาพ (Visual Discovery) ใช้สำหรับรวบรวมแรงบันดาลใจในเรื่องต่างๆ เช่น แฟชั่น, แต่งบ้าน, งานออกแบบ",
  },
  {
    id: 5,
    name: "Mockup World",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FSksgLZ78lXHGh2UKes9A_ahE7UR6p0qFQ&s",
    url: "https://www.mockupworld.co/",
    description:
      "คลัง Mockup คุณภาพสูงสำหรับนำเสนอผลงานออกแบบให้ดูสมจริง มีให้เลือกใช้ทั้งแบบฟรีและเสียเงิน",
  },
  {
    id: 6,
    name: "Github Copilot",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    url: "https://github.com/features/copilot",
    description:
      "เครื่องมือ AI ช่วยเขียนโค้ด (AI Pair Programmer) ที่ให้คำแนะนำและเติมโค้ดอัตโนมัติ ทำให้เขียนโปรแกรมได้เร็วขึ้น",
  },
  {
    id: 7,
    name: "ChatGPT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
    url: "https://chatgpt.com/",
    description:
      "แชทบอท AI อัจฉริยะที่สามารถสนทนา, ตอบคำถาม, ช่วยเขียนเนื้อหา, สรุปบทความ และเขียนโค้ดเบื้องต้นได้",
  },
  {
    id: 8,
    name: "Mobbin",
    logo: "https://mobbin.com/apple-icon.png?c21868dc79c132d6",
    url: "https://mobbin.com/",
    description:
      "คลังรวบรวมดีไซน์และแพทเทิร์นของแอปพลิเคชันบนมือถือที่มีอยู่จริง ใช้สำหรับศึกษา UI/UX และหาแรงบันดาลใจ",
  },
  {
    id: 9,
    name: "Font Awesome",
    logo: "https://ps.w.org/font-awesome/assets/icon-256x256.png?rev=1991998",
    url: "https://fontawesome.com/",
    description:
      "ชุดไอคอนสำเร็จรูปที่ได้รับความนิยมสูงสำหรับใช้ในเว็บไซต์และแอปพลิเคชัน ช่วยให้งานออกแบบมีความสอดคล้องกัน",
  },
];

const question = [
  "จุดเริ่มต้นของโปรเจคนี้เกิดขึ้นได้อย่างไร?",
  "ไอเดียแรกก่อนออกมาเป็นโปรเจ็คล่าสุดคืออะไร?",
  "อุปสรรคที่หนักที่สุดที่เจอในโปรเจ็ค",
  "ถ้ามีเวลาเพิ่ม อยากพัฒนาหรือปรับปรุงส่วนไหนในงาน",
  "คิดว่าสกิลอะไรที่เราควรมีในการทำโปรเจ็ค",
  "วิธีฮีลใจ เพิ่มพลังในวันที่เครียด หรือหมดไฟ",
];

export const allProjects = [
  {
    id: 1,
    type: type[0],
    title: "Blooms",
    creator: "Songpob Hamthanan",
    creatorTh: "ทรงภพ เหมธานันท์",
    nickName: "Jay",
    nickNameTh: "เจ",
    studentId: "133",
    thesisTh:
      "การออกแบบและพัฒนาเกมเพื่อเสริมสร้างความผ่อนคลายด้วยเทคนิคการประมวลผลเชิงพื้นที่",
    thesis: "Design and Development Spatial Computing Game For Relaxation",
    logoUrl: `${imageUrl}/${logoUrl}/133/jay_logo.png`,
    category: "University Students",
    advisor: `${advisor[4]}`,
    scopeTh:
      "การพัฒนาสื่อเทคนิคการประมวลผลเชิงพื้นที่ เพื่อสร้างความผ่อนคลายให้กับผู้ใช้งานที่กำลังประสบปัญหากับความเครียดในชีวิตประจำวัน ผ่านทฤษฎีสภาวะลื่นไหล (Flow State) ที่จะช่วยให้ผู้ใช้งานสามารถจดจ่อกับการผ่อนคลายได้อย่างเต็มที่ จนลืมเวลาและสิ่งรอบข้าง",
    scope:
      "This project focuses on the development of media using Spatial Computing to support users dealing with daily stress. It applies the theory of Flow State to enable users to become fully immersed in a state of relaxation, allowing them to lose track of time and external distractions.",
    ideaConceptTh:
      "ความเครียดเป็นสิ่งที่สามารถเกิดขึ้นได้จากการใช้ชีวิตประจำวัน แต่ผู้ที่กำลังประสบกับปัญหาความเครียดอาจไม่สามารถจัดการกับความเครียดได้ด้วยตัวเอง โดยโปรเจคนี้จะเข้ามาช่วยให้ผู้ที่กำลังสบปัญหาความเครียดนั้น สามารถจัดการกับความเครียดได้ผ่านการเล่นเกมที่มีการผสมผสาน ทฤษฎีสภาวะลื่นไหล (Flow State) ซึ่งจะช่วยให้ผู้ใช้งานสามารถจดจ่อกับสิ่งที่อยู่ตรงหน้า จนทำให้สามารถลืมเรื่องราวที่เคยเครียดได้ และทำให้ผู้ใช้งานผ่อนคลายมากขึ้น",
    ideaConcept:
      "Stress is a common consequence of daily life, yet individuals who experience it may find it difficult to manage on their own. This project introduces a game-based solution that incorporates the theory of Flow State to support stress management. By fostering deep focus on the present task, the experience allows users to momentarily forget stressful thoughts and enhances their overall sense of relaxation.",
    codingLanguage: ["C#"],
    databaseSystem: ["JSON"],
    codingTool: ["Unity", "Visual Studio Code", "Meta XR Simulator"],
    designTool: [
      "Blender",
      "Shapelab",
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
    targetGroup:
      "The student group, adolescent group, and early-career working adults.",
    targetGroupTh: "กลุ่มนักศึกษา กลุ่มวัยรุ่น และกลุ่มวัยทำงานช่วงเริ่มต้น",
    comments: [
      "อยากให้เพิ่มดอกไม้ Rare แบบมีเวลาจำกัด ที่อาจจะเพิ่ม Bonus หรือให้ไอเท็มพิเศษ ",
      "อยากให้เล่นแล้วมีความคืบหน้าบางอย่างเกิดขึ้นด้วย ไม่ใช่แค่มีถ้วยรางวัลแต่อาจจะเป็นสวนดอกไม้ส่วนตัวที่มีมากขึ้นตามการเล่น",
      `โปรเจกต์สามารถตอบโจทย์วัตถุประสงค์ที่ว่า "ต้องการให้ผู้เล่นรู้สึกผ่อนคลาย" ได้อย่างตรงจุด โดยในเกมมีการตอบสนองที่สมเหตุสมผล ทำให้สามารถคล้อยตามเกมและเกิดความเพลิดเพลินในระหว่างเล่นในระดับที่เวลาผ่านไปโดยไม่รู้ตัว`,
    ],
    functions: [
      {
        id: 1,
        title_en: "Mood tracking feature for players before and after gameplay",
        title_th: "ฟังก์ชันการบันทึกอารมณ์ของผู้เล่นทั้งก่อนเล่นและหลังเล่นเกม",
      },
      {
        id: 2,
        title_en: "Feature to track players’ consecutive play days",
        title_th: "ฟังก์ชันการสะสมจำนวนวันเล่นต่อเนื่องของผู้เล่น",
      },
      {
        id: 3,
        title_en: "Trophy collection feature for players",
        title_th: "ฟังก์ชันการเก็บสะสมถ้วยรางวัลของผู้เล่น",
      },
    ],
    projectInfoImageUrl: [
      `${imageUrl}/${projectInfoUrl}/133/jay_01.png`,
      `${imageUrl}/${projectInfoUrl}/133/jay_02.png`,
      `${imageUrl}/${projectInfoUrl}/133/jay_03.png`,
    ],
    testImageUrl: [
      `${imageUrl}/${testUrl}/133/jay_01.png`,
      `${imageUrl}/${testUrl}/133/jay_02.png`,
      `${imageUrl}/${testUrl}/133/jay_03.png`,
      `${imageUrl}/${testUrl}/133/jay_04.png`,
    ],
    keyFunctionImageUrl: `${imageUrl}/${keyFunctionUrl}/133/jay_01.png`,
    mainProfile: `${imageUrl}/${profileUrl}/133/Jay_mainProfile.JPG`,
    subProfile: `${imageUrl}/${profileUrl}/133/Jay_subProfile.JPG`,
    screenShots: [
      `${imageUrl}/${screenshotsUrl}/133/jay_01.png`,
      `${imageUrl}/${screenshotsUrl}/133/jay_02.png`,
      `${imageUrl}/${screenshotsUrl}/133/jay_03.png`,
      `${imageUrl}/${screenshotsUrl}/133/jay_04.png`,
      `${imageUrl}/${screenshotsUrl}/133/jay_05.png`,
    ],
    designTestScore: "4.93",
    usefulTestScore: "4.80",
    titleInfographic:
      "ความท้าทายของการพัฒนา Mixed Reality ในเชิงเทคนิคและ User Experience",
    infographicUrl: `${imageUrl}/${infographicUrl}/133/jay_infographic.png`,
    descriptionInfographic:
      "ชวนดูความท้าทายของการทำ UX บน Mixed Reality จะเป็นอย่างไหร่บ้าง เพราะทุกอย่างไม่ได้อยู่บนหน้าจอ?",
    quote: "ตอนนี้ไม่ได้นอน… เพราะกำลังนอนเขียนโค้ดอยู่",
    email: "jsongpob@gmail.com",
    linkedIn: "https://www.linkedin.com/in/songpob-hamthanan/",
    afterExhibited:
      "รู้สึกภูมิใจในผลงานของตัวเองมาก ๆ เพราะตอนแรกไม่คิดเลยว่าจะสามารถทำออกมาได้ขนาดนี้ แต่พอมันสำเร็จและออกมาดี มันทำให้เราภูมิใจตัวเองสุด ๆ ไม่ว่าช่วงที่ผ่านมาจะมีดีบ้าง ไม่ดีบ้าง แต่สุดท้ายเราก็ผ่านมาได้ เก่งสุด ๆ",
    ToolRecommended: [
      { id: 1, tool: tools[0] },
      {
        id: 2,
        tool: tools[5],
      },
      {
        id: 3,
        tool: tools[1],
      },
    ],
    interviewCover: `${imageUrl}/${insightCover}/interview_133.png`,
    interview: [
      {
        id: 1,
        timestamp: 14,
        question: question[0],
        videoUrl: "https://www.youtube.com/watch?v=X6JEQP-OSSU",
        answer:
          "จุดเริ่มต้นของโปรเจคนี้คือ เป็นสิ่งที่ไม่คาดคิดว่าจะทำตั้งแต่แรกด้วยซ้ำอะ มันเกิดจากที่เราอะ ได้เสนอโปรเจคไปแล้วประมาณ 2-3 หัวข้อ แต่ก็ยังรู้สึกว่าหาจุดลงตัวไม่ได้สักที จนอยู่ ๆ ก็มีความคิดอยากจะทำแอพบน Vision Pro ก็เลยไปถามอาจารย์ว่า สามารถขอใช้งานอุปกรณ์ได้ไหม ปรากฏอาจารย์บอกว่ามีแต่เป็น Meta Quest 3 ของคณะ ก็เลยแบบไปดูและไปถามเพื่อนคนที่เคยทำมาแล้ว ปรากฏว่ามันสามารถพัฒนาบนโปรแกรม Unity ได้ ด้วยความที่เราอะ เคยใช้ Unity มาก่อนอยู่แล้วตอนปี 3 เลยรู้สึก Safe ที่จะพัฒนาโปรเจคนี้ ก็เลยกลายเป็นโปรเจคที่พัฒนาจนสมบูรณ์เหมือนปัจจุบันนี้เองครับ",
      },
      {
        id: 2,
        timestamp: 51,
        question: question[1],
        videoUrl: "https://www.youtube.com/watch?v=X6JEQP-OSSU",
        answer:
          "ไอเดียแรกเลยหรอ ตอนนั้นน่าจะเป็นโปรเจคที่จะทำบน iPad ด้วยภาษา Swift ก็เพราะตอนนั้นเราเขียนภาษา Swift บ่อย เลยรู้สึกว่าอยากเขียนภาษานี้ต่อเลย โดยที่ไม่ต้องเรียนรู้ใหม่ แต่ถ้าเป็นโปรเจคเลย ก็น่าจะเกี่ยวกับแอพที่สอนเรื่องเกี่ยวกับการใช้สีเพื่อใช้ในการออกแบบ ตอนนั้นคิดว่าแบบจะทำเป็นแอพที่มี AR ที่สามารถเล่น Muiltplayer กับเพื่อนได้ด้วยนะ เอาจริง ๆ ไอเดียอะน่าสนใจมาก ๆ แต่เนื้อหาอะ ตอนนั้นคือยังไม่สามารถเอามาต่อยอดได้ เลยปัดตกไปก่อน",
      },
      {
        id: 3,
        timestamp: 119,
        question: question[3],
        videoUrl: "https://www.youtube.com/watch?v=X6JEQP-OSSU",
        answer:
          " เอาจริง ๆ คือมันมีไอเดียที่สนใจเยอะเลย ตอนที่กำลัง Sketch ออกแบบวิธีการเล่นอะ คือมันจะมีไอเดียแบบ เป็นดอกไม้หลาย ๆ อันลอยขึ้นไปบนเพดานงี้ แล้วให้คนต้องหยิบจากที่มันกำลังลอยงี้ ก็คือถ้ามีเวลาเพิ่มก็อยากจะใส่ไอเดียพวกนี้เข้าไป และก็อาจจะปรับโมเดลให้สวยขึ้นอะไรงี้",
      },
      {
        id: 4,
        timestamp: 152,
        question: question[5],
        videoUrl: "https://www.youtube.com/watch?v=X6JEQP-OSSU",
        answer:
          "โห้ อันนี้นี่คือแบบ จะแนะนำได้จริง ๆ หรอ 555555 วิธีฮีลใจสำหรับเราคือ ไปออกกำลังกาย แบบอาจจะวันละครึ่งชั่วโมง อะไรงี้ แล้วกลับมาคือมันจะทำให้สมองปรอดโปร่งขึ้นมาก ๆ และก็ช่วยลดความเครียดได้เช่นกัน และอีกวิธีหนึ่งคือ หาของอร่อย ๆ กิน หรือไม่ก็ออกไปข้างนอกกับเพื่อน ไปคุยกับเพื่อนงี้ ค่อนข้างช่วยได้เยอะเหมือนกันนะ",
      },
    ],
  },
  {
    id: 2,
    type: type[1],
    title: "FINDTYPE",
    creator: "Gasorn Supawong",
    creatorTh: "เกสร สุภาวงษ์",
    nickName: "Grace",
    nickNameTh: "เกรซ",
    studentId: "130",
    thesisTh:
      "การออกแบบและพัฒนาเว็บแอปพลิเคชันเพื่อเป็นตัวกลางในการซื้อ-ขายคีย์บอร์ดกลไกตามความสนใจสำหรับผู้ชื่นชอบคีย์บอร์ด",
    thesis:
      "Designing a Web Application as a Platform for Buying and Selling Mechanical Keyboard and Customizable Mechanical Keyboards for Keyboard Enthusiasts",
    logoUrl: `${imageUrl}/${logoUrl}/130/grace_logo.png`,
    category: "University Students",
    advisor: `${advisor[2]}`,
    scopeTh:
      "การพัฒนาเว็บแอปพลิเคชันเพื่อเป็นตัวกลางงในการซื้อ-ขายสินค้าประเภทคีย์บอร์ดปรับแต่งตามความสนใจและตามความต้องการ โดยสามารถใช้ได้ทั้งบนคอมพิวเตอร์ ไอแพด และสมาร์ทโฟน โดยมีหน้าซื้อสินค้าแยกเป็นหมวดหมู่จำเพาะ สร้างพื้นที่ให้สินค้าถูกพบเห็นมากขึ้น",
    scope:
      "The development of a web application that serves as a platform for buying and selling customizable keyboards tailored to users’ interests and preferences. The application is designed to be accessible on computers, iPads, and smartphones, featuring a product purchasing page with clearly categorized sections to enhance product visibility and discoverability.",
    ideaConceptTh:
      "การจับคู่สินค้าโดยใช้ Dialogflow แพลตฟอร์มจากกูเกิลที่ใช้พัฒนาเอไอ มาช่วยกรองคีย์เวิร์ดคำค้นหากับสินค้า เป็นฟังก์ชันที่ช่วยในการตัดสินใจซื้อสินค้า เนื่องจากกลุ่มเป้าหมายของเว็บไซต์มีทั้งผู้เริ่มศึกษาและผู้ที่มีความรู้อยู่แล้ว ทำเพิ่มช่องทางการสินค้าประเภทคีย์บอร์ดเกิดการหมุนเวียนในตลาดทั้งแบบมือ1 และมือ2",
    ideaConcept:
      "Product matching using Dialogflow, a Google-developed AI platform, is implemented to filter keywords from user searches and align them with suitable products. This function supports purchasing decisions, as the website targets both beginners and experienced users. It also creates additional channels for keyboard circulation in the market, including both new and second-hand items.",
    codingLanguage: ["PHP", "HTML", "CSS", "JavaScript"],
    databaseSystem: ["MySQL"],
    codingTool: ["Dialog Flow", "Visual Studio Code"],
    designTool: ["Figma", "Procreate", "Adobe Illustrator"],
    targetGroup:
      "Gen Y and Gen X working-age individuals (18–44 years old) who are enthusiasts of mechanical keyboards.",
    targetGroupTh:
      "กลุ่มคนวัยทำงานGen Y และ Gen X อายุตั้งแต่ 18-44 ปี ที่มีความชื่นชอบเกี่ยวกับคีย์บอร์ดกลไก",
    comments: [
      "ตัวหนังสือบางจุดพอไม่ใช้คอมแล้วเล็ก อ่านยาก",
      "น่าสนใจ เพราะเว็บดูเจาะจงดี แต่ UI ดูยังไม่สวย",
      "อยากให้มันแก้ไขข้อมูลได้ หรือลบได้ถ้ากรอกผิด",
    ],
    functions: [
      {
        id: 1,
        title_en: "Product purchasing and order number tracking function",
        title_th: "ฟังก์ชันซื้อสินค้า และตรวจสอบเลขออเดอร์",
      },
      {
        id: 2,
        title_en: "Product selling, editing, and deletion function",
        title_th: "ฟังก์ชันขายสินค้า และแก้ไข ลบสินค้า",
      },
      {
        id: 3,
        title_en: "Product-user matching function",
        title_th: "ฟังก์ชันจับคู่สินค้าและผู้ใช้งาน",
      },
    ],
    projectInfoImageUrl: [
      `${imageUrl}/${projectInfoUrl}/130/grace_01.png`,
      `${imageUrl}/${projectInfoUrl}/130/grace_02.png`,
      `${imageUrl}/${projectInfoUrl}/130/grace_03.png`,
    ],
    testImageUrl: [
      `${imageUrl}/${testUrl}/130/grace_01.png`,
      `${imageUrl}/${testUrl}/130/grace_02.png`,
      `${imageUrl}/${testUrl}/130/grace_03.png`,
      `${imageUrl}/${testUrl}/130/grace_04.png`,
    ],
    keyFunctionImageUrl: `${imageUrl}/${keyFunctionUrl}/130/grace_01.png`,
    mainProfile: `${imageUrl}/${profileUrl}/130/Grace_mainProfile.JPG`,
    subProfile: `${imageUrl}/${profileUrl}/130/Grace_subProfile.JPG`,
    screenShots: [
      `${imageUrl}/${screenshotsUrl}/130/grace_01.png`,
      `${imageUrl}/${screenshotsUrl}/130/grace_02.png`,
      `${imageUrl}/${screenshotsUrl}/130/grace_03.png`,
      `${imageUrl}/${screenshotsUrl}/130/grace_04.png`,
      `${imageUrl}/${screenshotsUrl}/130/grace_05.png`,
    ],
    designTestScore: "4.20",
    usefulTestScore: "4.30",
    titleInfographic: "คุณเหมาะกับคีย์บอร์ดไซส์อะไร?",
    infographicUrl: `${imageUrl}/${infographicUrl}/130/grace_infographic.png`,
    descriptionInfographic:
      "คีย์บอร์ดแต่ละขนาดมักมีการใช้งานฟังก์ชัน หรือความสะดวกที่แตกต่างกัน โดยหากเลือกขนาดไม่ตรงกับการใช้งาน อาจทำให้ต้องซื้อใหม่ ใช้งานใหม่ ไม่มีปุ่มฟังก์ชันลัดให้ใช้งานและอื่นๆ อาจทำให้ต้องซื้อใหม่หรือได้รับประสบการณ์เริ่มต้นที่ไม่ดี",
    quote: "ฝันให้ไกล ไปให้พ้น",
    email: "gracesupawong@gmail.com",
    linkedIn: "www.linkedin.com/in/gasorn-supawong",
    afterExhibited:
      "ดีใจที่เห็นว่าโปรเจ็คตัวเองเป็นรูปเป็นร่าง เพราะกว่าเราจะเสนอหัวข้อผ่านเพื่อนก็นำไปไกลแล้ว เอาเข้าจริงๆระยะเวลา 6 เดือนมันเร็วมากเพราะงั้นเราไม่จำเป็นต้องกลัวความผิดพลาดเพราะความผิดพลาดคือพื้นฐานการเรียนรู้เพื่อไปสู่ความสำเร็จ",
    ToolRecommended: [
      { id: 1, tool: tools[2] },
      {
        id: 2,
        tool: tools[3],
      },
    ],
    interviewCover: `${imageUrl}/${insightCover}/interview_130.png`,
    interview: [
      {
        id: 1,
        timestamp: 15,
        question: question[0],
        videoUrl: "https://www.youtube.com/watch?v=riEqfbAwU3o",
        answer:
          "รู้สึกดีใจที่ได้จัดนิทรรศการให้คนอื่นได้มาชมผลงานต่างๆ ได้แลกเปลี่ยนความคิดเห็นในมุมมองของเราที่เป็นคนทำและมุมมองของคนที่มาดูงาน ถือได้ว่าช่วยให้เราได้ลอง",
      },
      {
        id: 2,
        timestamp: 71,
        question: question[1],
        videoUrl: "https://www.youtube.com/watch?v=riEqfbAwU3o",
        answer:
          "รู้สึกดีใจที่ได้จัดนิทรรศการให้คนอื่นได้มาชมผลงานต่างๆ ได้แลกเปลี่ยนความคิดเห็นในมุมมองของเราที่เป็นคนทำและมุมมองของคนที่มาดูงาน ถือได้ว่าช่วยให้เราได้ลอง",
      },
      {
        id: 3,
        timestamp: 149,
        question: question[3],
        videoUrl: "https://www.youtube.com/watch?v=riEqfbAwU3o",
        answer:
          "รู้สึกดีใจที่ได้จัดนิทรรศการให้คนอื่นได้มาชมผลงานต่างๆ ได้แลกเปลี่ยนความคิดเห็นในมุมมองของเราที่เป็นคนทำและมุมมองของคนที่มาดูงาน ถือได้ว่าช่วยให้เราได้ลอง",
      },
      {
        id: 4,
        timestamp: 191,
        question: question[5],
        videoUrl: "https://www.youtube.com/watch?v=riEqfbAwU3o",
        answer:
          "รู้สึกดีใจที่ได้จัดนิทรรศการให้คนอื่นได้มาชมผลงานต่างๆ ได้แลกเปลี่ยนความคิดเห็นในมุมมองของเราที่เป็นคนทำและมุมมองของคนที่มาดูงาน ถือได้ว่าช่วยให้เราได้ลอง",
      },
    ],
  },
  {
    id: 3,
    type: type[0],
    title: "MOVE QUEST",
    creator: "Suparuek Singsai",
    creatorTh: "ศุภฤกษ์ สิงห์สาย",
    nickName: "Earth",
    nickNameTh: "เอิร์ธ",
    studentId: "238",
    thesisTh:
      "การออกแบบสื่อปฏิสัมพันธ์เพื่อส่งเสริมการออกกําลังกาย สำหรับเด็กชั้นประถมศึกษาตอนต้น",
    thesis:
      "Designing Interactive Media to Promote Physical Exercise for Elementary School Students",
    logoUrl: `${imageUrl}/${logoUrl}/238/earth_logo.png`,
    category: "Elementary School Children",
    advisor: `${advisor[2]}`,
    scopeTh:
      "จุลนิพนธ์นี้มุ่งเน้นการออกแบบและพัฒนาสื่อปฏิสัมพันธ์เพื่อส่งเสริมการออกกำลังกายในเด็กประถมต้น โดยใช้แนวทางที่สนุก มีส่วนร่วม และเหมาะสมกับวัย สื่อถูกออกแบบให้ผสมผสานการเคลื่อนไหวกับองค์ประกอบของเกม เช่น ภารกิจและการสะสมคะแนน พร้อมระบบตอบสนองแบบเรียลไทม์ เพื่อกระตุ้นให้เด็กออกกำลังกายอย่างต่อเนื่อง",
    scope:
      "This thesis focuses on the design and development of interactive media to promote physical activity among early primary school children. The approach emphasizes fun, engagement, and age-appropriateness. The media integrates physical movement with game elements such as missions and point collection, along with a real-time feedback system to encourage children to exercise consistently.",
    ideaConceptTh:
      "พฤติกรรมของเด็กในปัจจุบันเปลี่ยนไปจากเดิม โดยใช้เวลาอยู่กับหน้าจอมากกว่าการออกกำลังกาย ส่งผลให้กิจกรรมทางกายลดลง และเกิดปัญหาสุขภาพตามมา เช่น โรคอ้วน หรือปัญหาด้านจิตใจ โครงการนี้จึงมุ่งออกแบบสื่อปฏิสัมพันธ์ที่สนุกและเหมาะสมกับวัย เพื่อส่งเสริมให้เด็กประถมต้นมีส่วนร่วมในการออกกำลังกายอย่างสม่ำเสมอ ผ่านเกมและกิจกรรมที่ผสมผสานการเคลื่อนไหว เพื่อสร้างพฤติกรรมสุขภาพที่ดีและยั่งยืนในระยะยาว",
    ideaConcept:
      "Children’s lifestyles today have changed significantly, with more screen time and less physical activity. This shift has led to decreased movement and increased health issues such as obesity and mental health problems. This project aims to design interactive media that is fun and age-appropriate to encourage regular physical activity among early primary school children. Through games and movement-based activities, the media helps foster healthy habits and supports long-term physical and mental well-being.",
    codingLanguage: ["PHP", "C#", "JavaScript"],
    databaseSystem: ["MySQL"],
    codingTool: ["Visual Studio Code", "Unity"],
    designTool: ["Figma", "Adobe Illustrator ,Photoshop"],
    targetGroup: "Group of primary school students",
    targetGroupTh: "กลุ่มนักเรียนวัยประถมต้น",
    comments: [
      "เวลาตอนวอร์มร่างกายนานเกินไป",
      "ด่านที่ 2 หอกสูงเกินไป",
      "อยากให้มีปุ่ม Skip (เวลาเกิดปัญหาบัค)",
    ],
    functions: [
      {
        id: 1,
        title_en: "Exercise Game Function (3 Levels)",
        title_th: "ฟังก์ชันการเล่นเกมออกกำลังกาย (3 ด่าน)",
      },
      {
        id: 2,
        title_en: "Student Queue Management Function (for Teachers)",
        title_th: "ฟังก์ชันการจัดคิวการเข้าเล่นของนักเรียน(สำหรับครู)",
      },
      {
        id: 3,
        title_en: "Display of Individual Player Scores",
        title_th: "แสดงคะแนนของเด็กที่เล่นแต่ละคน",
      },
    ],
    projectInfoImageUrl: [
      `${imageUrl}/${projectInfoUrl}/238/earth_01.png`,
      `${imageUrl}/${projectInfoUrl}/238/earth_02.png`,
      `${imageUrl}/${projectInfoUrl}/238/earth_03.png`,
    ],
    testImageUrl: [
      `${imageUrl}/${testUrl}/238/earth_01.png`,
      `${imageUrl}/${testUrl}/238/earth_02.png`,
      `${imageUrl}/${testUrl}/238/earth_03.png`,
      `${imageUrl}/${testUrl}/238/earth_04.png`,
    ],
    keyFunctionImageUrl: `${imageUrl}/${keyFunctionUrl}/238/earth_01.png`,
    mainProfile: `${imageUrl}/${profileUrl}/238/Earth_mainProfile.JPG`,
    subProfile: `${imageUrl}/${profileUrl}/238/Earth_subProfile.JPG`,
    screenShots: [
      `${imageUrl}/${screenshotsUrl}/238/earth_01.png`,
      `${imageUrl}/${screenshotsUrl}/238/earth_02.png`,
      `${imageUrl}/${screenshotsUrl}/238/earth_03.png`,
      `${imageUrl}/${screenshotsUrl}/238/earth_04.png`,
      `${imageUrl}/${screenshotsUrl}/238/earth_05.png`,
    ],
    designTestScore: "4.5",
    usefulTestScore: "4",
    titleInfographic: "ประโยชน์ของการออกกำลังกาย",
    infographicUrl: `${imageUrl}/${infographicUrl}/238/earth_infographic.png`,
    descriptionInfographic:
      "กิจกรรมเคลื่อนไหวผ่านการเล่นอย่างมีจินตนาการ ช่วยส่งเสริมพัฒนาการด้านร่างกาย เสริมสร้างความแข็งแรง การตอบสนองที่รวดเร็ว และสมดุลของร่างกาย ซึ่งล้วนเป็นพื้นฐานสำคัญต่อการเรียนรู้และพัฒนาทักษะชีวิตในทุกด้าน",
    quote: "การบ้านเป็นแสน คะแนนเป็นศูนย์",
    email: "earthkungch1@gmail.com",
    linkedIn: "https://www.linkedin.com/in/supareuk-singsai/",
    afterExhibited:
      "รู้สึกดีใจ และภูมิใจในผลงานของตัวเอง และเพื่อนๆมากครับ ในที่สุดทุกคนก็ทำได้ พอนึกย้อนกลับไปทุกคนก็ผ่านอะไรกันมาเยอะมาก ทั้งสนุกสนาน เครียด หรือเสียน้ำตาแต่ทุกอย่างมันก็ทำให้เกิดวันนี้ขึ้น ขอบคุณทุกคนที่พยายาม คอยช่วยเหลือกัน และยังอยู่ด้วยกัน",
    ToolRecommended: [
      { id: 1, tool: tools[1] },
      {
        id: 2,
        tool: tools[3],
      },
      {
        id: 3,
        tool: tools[0],
      },
    ],
    interviewCover: `${imageUrl}/${insightCover}/interview_238.png`,
    interview: [
      {
        id: 1,
        timestamp: 12,
        question: question[0],
        videoUrl: "https://www.youtube.com/watch?v=j7oAdvP1hJ0",
        answer:
          "โปรเจคนี้เริ่มมาจากการที่ตัวผมสังเกตว่า เด็กๆเดี๋ยวนี้อะครับ ใช้เวลาอยู่กับหน้าจอเยอะมาก ไม่ว่าจะเป็นดูยูทูป เล่นเกม หรือเล่นมือถือ จนบางทีแทบไม่ได้ลุกขึ้นมาเคลื่อนไหวเลย ที่เจอใกล้ตัวเลยคือน้องผมเองครับ ซึ่งมันก็เริ่มส่งผลกับสุขภาพ ไม่ว่าจะเรื่องน้ำหนัก หรือสมาธิในการเรียน พอเห็นแบบนี้ ผมเลยตั้งคำถามขึ้นมาว่า จะทำยังไงให้เด็กอยากลุกขึ้นมาออกกำลังกาย โดยที่เขารู้สึกว่าสนุก ไม่ฝืนตัวเอง ตรงนี้แหละครับ ที่กลายมาเป็นจุดเริ่มต้นของไอเดีย ในการทำสื่อปฏิสัมพันธ์ ที่ทำให้การออกกำลังกายกลายเป็นเกมที่เด็กอยากเล่นเอง",
      },
      {
        id: 2,
        timestamp: 55,
        question: question[1],
        videoUrl: "https://www.youtube.com/watch?v=j7oAdvP1hJ0",
        answer:
          "ไอเดียแรกของผมเลย คือ จะทำเว็บที่ขายสินค้า otop ด้วย เทคโนโลยี ar ครับ ก็คือเป็นเว็บที่ช่วยให้ผู้บริโภคสามารถเห็นภาพสินค้าจริงในสภาพแวดล้อมห้องของตนเองได้ ซึ่งมันจะเป็นการส่งเสริมการขายสินค้า OTOP ให้มากขึ้นอีกด้วยครับ แต่ จากไอเดียเว็บขายสินค้า otop มาเป็น เกมออกกำลังกายได้ยังไง บอกด้วยนะครับ ผมก็งงเหมือนกัน",
      },
      {
        id: 3,
        timestamp: 87,
        question: question[2],
        videoUrl: "https://www.youtube.com/watch?v=j7oAdvP1hJ0",
        answer:
          "อุปสรรคที่หนักสุดเลยน่าจะเป็นเรื่อง เทคโนโลยี ครับ ตอนแรกคิดว่ากล้องจับท่าทางเด็กไม่น่าจะยาก สรุปยากเอาเรื่องอยู่เลยครับ บางทีกล้องมันก็จับผิดบ้าง เพี้ยนบ้าง จับอะไรก็ไม่รู้หลังคนที่เข้ามาเล่นบ้างครับ เทสต์จนคอมแทบไหม้ จอฟ้าร้อยรอบ อันนี้ปัญหาส่วนตัวนะครับ แต่พอระบบเริ่มเสถียร เด็กเล่นแล้วสนุก เราก็รู้เลยว่า ทุกบรรทัดที่โค้ดจนปวดหัว มันคุ้มค่าจริงๆครับ",
      },
      {
        id: 4,
        timestamp: 131,
        question: question[5],
        videoUrl: "https://www.youtube.com/watch?v=j7oAdvP1hJ0",
        answer:
          "ถ้าเป็นตัวผม ผมจะเปลี่ยนที่ทำงาน หรือแบบออกจากห้อง ไปพักผ่อนครับ หาของอะไรอร่อยๆกินไปดูหนัง ก็คือหาเวลาพักให้ตัวเองบ้างอะครับ อย่าทำจนแบบไม่ได้พักเลยมันจะเหนื่อยครับ หมดไฟ แต่ก็อย่าพักยาวแล้วมาเร่งทำวันท้ายๆนะครับ ถ้าแบบนี้ยุ่งเลย อ้อแล้วก็อีกอย่าง ไปหาเพื่อนครับ หรือโทรคุยกับเพื่อน จะทำให้เรามีเพื่อนคุยไม่เครียดถ้าเพื่อนมันไม่กวนนะครับ",
      },
    ],
  },
  {
    id: 4,
    type: type[0],
    title: "B.less",
    creator: "Kunyada Chammee",
    creatorTh: "กูลญาดา แช่มมี",
    nickName: "Porsche",
    nickNameTh: "ปอเช่",
    studentId: "129",
    thesisTh:
      "การออกแบบและพัฒนาศิลปะอินเทอร์แอคทีฟเพื่อสร้างความตระหนักถึงภัยของบุหรี่ไฟฟ้า",
    thesis:
      "Design and Development Interactive Art to Raise Awareness Of the Dangers of E-cigarettes",
    logoUrl: `${imageUrl}/${logoUrl}/129/porsche_logo.png`,
    category: "University Students",
    advisor: `${advisor[2]}`,
    scopeTh:
      "การพัฒนาศิลปะอินเทอร์แอคทีฟเพื่อให้ผู้ที่เข้ามารับชมผลงานได้รู้สึกถึงโทษและมีความตระหนักถึงภัยของบุหรี่ไฟฟ้า",
    scope:
      "Developing interactive art to evoke the perceived harms and raise public awareness about the dangers of electronic cigarettes., when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ideaConceptTh:
      "การประเมินระดับความเสี่ยงจากเครื่องมือนี้ เพื่อให้คุณครูในสถานศึกษาได้ดูผลการประเมินและนำไปซึ่งการลดความเสี่ยงการโดนบูลลี่ได้ภายในอนาคต เนื่องจากเด็กในวัยมัธยมต้น ขาดเครื่องมือที่ช่วยในการวัดระดับความเสี่ยงหรือยากต่อการประเมินความเสี่ยงของตัวเองเกี่ยวกับการถูกรังแกในโรงเรียน",
    ideaConcept:
      "The risk assessment from this tool allows teachers in educational institutions to see the assessment results and lead to reducing the risk of bullying in the future. Because children in middle school lack tools to help measure the risk level or find it difficult to assess their own risk of being bullied in school.",
    codingLanguage: ["PHP", "HTML", "CSS", "JavaScript"],
    databaseSystem: ["MySQL"],
    codingTool: ["Visual Studio Code"],
    designTool: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects"],
    targetGroup:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    targetGroupTh: "กลุ่ม Gen Z นักศึกษามหาวิทยาลัย",
    comments: [
      "อยากให้มีเสียงประกอบ",
      "จอแสดงข้อความค่อนข้างจำกัดในเรื่องของแสง",
      "ตอนแสดงข้อความหากuserใช้งานเยอะทำให้แสดงผลช้า",
    ],
    functions: [
      {
        id: 1,
        title_en: "Display messages from the website on a TV screen",
        title_th: "ส่งข้อความจาก website ขึ้นไปบนจอ TV",
      },
      {
        id: 2,
        title_en: "Display emojis sent from the website on a TV screen",
        title_th: "ส่ง Emoji จาก website ขึ้นไปบนจอ TV",
      },
      {
        id: 3,
        title_en: "Give yourself encouragement",
        title_th: "ให้กำลังใจตนเอง",
      },
    ],
    projectInfoImageUrl: [
      `${imageUrl}/${projectInfoUrl}/129/porsche_01.png`,
      `${imageUrl}/${projectInfoUrl}/129/porsche_02.png`,
      `${imageUrl}/${projectInfoUrl}/129/porsche_03.png`,
    ],
    testImageUrl: [
      `${imageUrl}/${testUrl}/129/porsche_01.png`,
      `${imageUrl}/${testUrl}/129/porsche_02.png`,
      `${imageUrl}/${testUrl}/129/porsche_03.png`,
      `${imageUrl}/${testUrl}/129/porsche_04.png`,
    ],
    keyFunctionImageUrl: `${imageUrl}/${keyFunctionUrl}/129/porsche_01.png`,
    mainProfile: `${imageUrl}/${profileUrl}/129/Porche_mainProfile.jpg`,
    subProfile: `${imageUrl}/${profileUrl}/129/Porche_subProfile.jpg`,
    screenShots: [
      `${imageUrl}/${screenshotsUrl}/129/porsche_01.png`,
      `${imageUrl}/${screenshotsUrl}/129/porsche_02.png`,
      `${imageUrl}/${screenshotsUrl}/129/porsche_03.png`,
      `${imageUrl}/${screenshotsUrl}/129/porsche_04.png`,
      `${imageUrl}/${screenshotsUrl}/129/porsche_05.png`,
    ],
    designTestScore: "4.60",
    usefulTestScore: "4.60",
    titleInfographic: "บุหรี่ไฟฟ้า รสหวานสารแน่น",
    infographicUrl: `${imageUrl}/${infographicUrl}/129/porsche_infographic.png`,
    descriptionInfographic:
      "บุหรี่ไฟฟ้า  มีทั้งโทษทางกฏหมายและโทษทางร่างกาย โดยบุหรี่ไฟฟ้าไม่ใช่ ทางเลือกที่ปลอดภัยกว่า บุหรี่ธรรมดา",
    quote: "Don't give up your dreams. Keep sleeping.",
    email: "porsche.kyd@gmail.com",
    linkedIn: "https://www.linkedin.com/in/kunyada-chammee/",
    afterExhibited:
      "รู้สึกว่าได้ก้าวผ่านบันไดไปอีกขั้นแล้ว เป็นก้าวที่เหนื่อยเอาเรื่องแต่สนุกมาก ก้าวต่อจากนี้จะยากกว่านี้ก็รู้สึกไม่กลัวแล้ว และต้องขอบคุณทุกคนที่มีส่วนร่วมในการพัฒนาโปรเจ็คนี้ครับ พวกเราเก่งโครต",
    ToolRecommended: [
      { id: 1, tool: tools[1] },
      {
        id: 2,
        tool: tools[0],
      },
      {
        id: 3,
        tool: tools[6],
      },
    ],
    interviewCover: `${imageUrl}/${insightCover}/interview_129.png`,
    interview: [
      {
        id: 1,
        timestamp: 11,
        question: question[0],
        videoUrl: "https://www.youtube.com/watch?v=AyMCLhIQKf0",
        answer:
          "รู้สึกดีใจที่ได้จัดนิทรรศการให้คนอื่นได้มาชมผลงานต่างๆ ได้แลกเปลี่ยนความคิดเห็นในมุมมองของเราที่เป็นคนทำและมุมมองของคนที่มาดูงาน ถือได้ว่าช่วยให้เราได้ลอง",
      },
      {
        id: 2,
        timestamp: 73,
        question: question[1],
        videoUrl: "https://www.youtube.com/watch?v=AyMCLhIQKf0",
        answer:
          "รู้สึกดีใจที่ได้จัดนิทรรศการให้คนอื่นได้มาชมผลงานต่างๆ ได้แลกเปลี่ยนความคิดเห็นในมุมมองของเราที่เป็นคนทำและมุมมองของคนที่มาดูงาน ถือได้ว่าช่วยให้เราได้ลอง",
      },
      {
        id: 3,
        timestamp: 123,
        question: question[2],
        videoUrl: "https://www.youtube.com/watch?v=AyMCLhIQKf0",
        answer:
          "รู้สึกดีใจที่ได้จัดนิทรรศการให้คนอื่นได้มาชมผลงานต่างๆ ได้แลกเปลี่ยนความคิดเห็นในมุมมองของเราที่เป็นคนทำและมุมมองของคนที่มาดูงาน ถือได้ว่าช่วยให้เราได้ลอง",
      },
      {
        id: 4,
        timestamp: 145,
        question: question[5],
        videoUrl: "https://www.youtube.com/watch?v=AyMCLhIQKf0",
        answer:
          "รู้สึกดีใจที่ได้จัดนิทรรศการให้คนอื่นได้มาชมผลงานต่างๆ ได้แลกเปลี่ยนความคิดเห็นในมุมมองของเราที่เป็นคนทำและมุมมองของคนที่มาดูงาน ถือได้ว่าช่วยให้เราได้ลอง",
      },
    ],
  },
  {
    id: 5,
    type: type[2],
    title: "StockPlay",
    creator: "Kanna Muengthianwatthana",
    creatorTh: "กรรณา เมืองเทียนวัฒนา",
    nickName: "Baitong",
    nickNameTh: "ใบตอง",
    studentId: "451",
    thesisTh:
      "การออกแบบและพัฒนาแอปพลิเคชันเพื่อส่งเสริมทักษะการลงทุนในหุ้นขั้นพื้นฐาน",
    thesis:
      "Design and Development of a Platform to Promote Family Activities: A Case Study of Nuclear Families and Single-Parent FamiliesThe Design and Development of an Application to Promote Basic Stock Investment Skills",
    logoUrl: `${imageUrl}/${logoUrl}/451/baitong_logo.png`,
    category: "Working Adults",
    advisor: `${advisor[1]}`,
    scopeTh:
      "การพัฒนาแอปพลิเคชันเพื่อช่วยให้ผู้ใช้งานสามารถเรียนรู้และฝึกฝนทักษะการลงทุนในหุ้นขั้นพื้นฐานได้ด้วยตนเอง โดยแอปจะรวบรวมข้อมูลผู้ใช้งาน เช่น ระดับความรู้เบื้องต้น ความสนใจด้านการลงทุน และพฤติกรรมการตัดสินใจ เพื่อวิเคราะห์และนำเสนอเนื้อหา บทเรียน และสถานการณ์จำลองที่เหมาะสมกับแต่ละบุคคลอย่างมีประสิทธิภาพ ช่วยลดความสับสนจากข้อมูลที่ซับซ้อน และเพิ่มความมั่นใจในการเรียนรู้และฝึกตัดสินใจในตลาดหุ้นอย่างปลอดภัยและเข้าใจง่าย",
    scope:
      "The development of an application aims to help users learn and practice basic stock investment skills independently. The app collects user information such as initial knowledge level, investment interests, and decision-making behavior in order to analyze and deliver content, lessons, and simulated scenarios tailored to each individual. This personalized approach helps reduce confusion caused by complex information and enhances users' confidence in learning and practicing investment decision-making in a safe and easy-to-understand manner.",
    ideaConceptTh:
      "ในปัจจุบัน คนรุ่นใหม่จำนวนมากเริ่มให้ความสนใจด้านการลงทุน แต่ยังขาดความรู้พื้นฐานและประสบการณ์ในการวิเคราะห์และตัดสินใจลงทุนอย่างมีระบบ ประกอบกับข้อมูลเกี่ยวกับตลาดหุ้นมีความซับซ้อน ทำให้ผู้เริ่มต้นรู้สึกสับสนและไม่กล้าเริ่มต้นลงทุนจริง โครงการนี้จึงมุ่งออกแบบและพัฒนาแอปพลิเคชันที่สนุก เข้าใจง่าย และเหมาะสมกับกลุ่มวัยรุ่น โดยใช้รูปแบบเกมและสถานการณ์จำลอง เพื่อช่วยให้ผู้ใช้งานสามารถเรียนรู้ ฝึกฝน และพัฒนาทักษะการลงทุนในหุ้นขั้นพื้นฐานได้ด้วยตนเองอย่างมั่นใจ และวางรากฐานพฤติกรรมการเงินที่ดีในระยะยาว",
    ideaConcept:
      "Nowadays, many young people are becoming increasingly interested in investment, but they still lack fundamental knowledge and experience in systematic analysis and decision-making. Moreover, stock market information can be complex, causing beginners to feel confused and hesitant to start investing. This project aims to design and develop an engaging and easy-to-understand application tailored to teenagers. By incorporating game-based learning and simulated scenarios, the application helps users learn, practice, and develop basic stock investment skills confidently on their own, while also laying the foundation for long-term financial literacy and responsible financial behavior.",
    codingLanguage: ["C#"],
    databaseSystem: ["MySQL"],
    codingTool: ["Visual Studio Code", "Unity"],
    designTool: ["Figma", "Adobe Illustrator", "Photoshop"],
    targetGroup:
      "This project is designed for individuals who are interested in stock investment and those who are just beginning to explore and learn about investing. The target audience primarily includes members of Generation Z—people born between 1996 and 2012—who are familiar with digital technology and eager to gain financial knowledge through interactive and engaging platforms.",
    targetGroupTh:
      "บุคคลที่สนใจเกี่ยวกับการลงทุนในหุ้น, บุลคลที่เริ่มต้นอยากเรียนรู้การลงทุน หรือคนที่เกิดปี 1996-2012",
    comments: [
      "อยากให้มีการเคลี่อนไหวอนิเมชันเพิ่ม",
      "เนื้อหาบางข้อยาวเกินไป ",
      "อยากให้แรนด้อมสลับบททดสอบ",
    ],
    functions: [
      {
        id: 1,
        title_en: "UpSkill",
        title_th: "เพิ่มทักษะพื้นฐานการลงทุนในหุ้น",
      },
      {
        id: 2,
        title_en: "Simulate News",
        title_th: "จำลองข่าวสารที่เคยเกิดขึ้น",
      },
      { id: 3, title_en: "Simulate Sell&Buy", title_th: "จำลองการซื้อขายหุ้น" },
    ],
    projectInfoImageUrl: [
      `${imageUrl}/${projectInfoUrl}/451/baitong_01.png`,
      `${imageUrl}/${projectInfoUrl}/451/baitong_02.png`,
      `${imageUrl}/${projectInfoUrl}/451/baitong_03.png`,
    ],
    testImageUrl: [
      `${imageUrl}/${testUrl}/451/baitong_01.png`,
      `${imageUrl}/${testUrl}/451/baitong_02.png`,
      `${imageUrl}/${testUrl}/451/baitong_03.png`,
      `${imageUrl}/${testUrl}/451/baitong_04.png`,
    ],
    keyFunctionImageUrl: `${imageUrl}/${keyFunctionUrl}/451/baitong_01.png`,
    mainProfile: `${imageUrl}/${profileUrl}/451/Baitong_mainProfile.JPG`,
    subProfile: `${imageUrl}/${profileUrl}/451/Baitong_subProfile.JPG`,
    screenShots: [
      `${imageUrl}/${screenshotsUrl}/451/baitong_01.png`,
      `${imageUrl}/${screenshotsUrl}/451/baitong_02.png`,
      `${imageUrl}/${screenshotsUrl}/451/baitong_03.png`,
      `${imageUrl}/${screenshotsUrl}/451/baitong_04.png`,
      `${imageUrl}/${screenshotsUrl}/451/baitong_05.png`,
    ],
    designTestScore: "3.80",
    usefulTestScore: "3.60",
    titleInfographic: "รายได้เท่าไหร่ต้องเสียภาษี",
    infographicUrl: `${imageUrl}/${infographicUrl}/451/baitong_infographic.png`,
    descriptionInfographic:
      "รายละเอียดอัตราเฉลี่ยรายได้ต่อปีหากมีรายได้เท่านี้ต้องจ่ายภาษีเท่าไหร่หรือจ่ายกี่เปอร์เซ็นของรายได้",
    quote: "ขยันที่ไหนเหนื่อยที่นั่น",
    email: "Kannaforw@gmail.com",
    linkedIn: "www.linkedin.com/in/kanna-mueangthianwatthana",
    afterExhibited: `ตอนเริ่มต้นโปรเจกต์นี้ ยอมรับเลยว่ามีความรู้สึกไม่มั่นใจอยู่ตลอด คำถามในหัวคือ "เราจะทำได้จริงเหรอ?" หรือ "มันจะออกมาดีพอไหม?" พอเห็นคนอื่นไปไกลแล้วก็ยิ่งรู้สึกกดดัน ไม่แน่ใจว่าตัวเองกำลังตามทันหรือเปล่า
แต่พอเริ่มค่อย ๆ ลงมือทำ ถึงจะยังไม่สมบูรณ์แบบ แต่ก็เริ่มเห็นเป็นรูปร่างขึ้นมาทีละนิด มันทำให้รู้ว่า การกลัวไม่ผิด แต่การไม่ลองเลยต่างหากที่น่าเสียดาย
ทุกขั้นตอนที่ทำ แม้จะลังเลบ้าง เหนื่อยบ้าง แต่ก็ได้เรียนรู้ว่า "เรากำลังสร้างบางอย่างที่มีคุณค่า" และแค่ยังไม่ยอมแพ้ มันก็คือก้าวที่สำคัญแล้ว`,
    ToolRecommended: [
      { id: 1, tool: tools[1] },
      {
        id: 2,
        tool: tools[3],
      },
      {
        id: 3,
        tool: tools[0],
      },
      {
        id: 4,
        tool: tools[2],
      },
    ],
    interviewCover: `${imageUrl}/${insightCover}/interview_451.png`,
    interview: [
      {
        id: 1,
        timestamp: 11,
        question: question[0],
        videoUrl: "https://www.youtube.com/watch?v=IWHzZudXmpQ",
        answer:
          "โปรเจคนี้เริ่มต้นจากการสังเกตตัวเองและเพื่อนรอบตัวค่ะว่า เรารู้จักการใช้เงิน แต่ไม่ค่อยมีใครเข้าใจเรื่อง “ลงทุน” หรือ “การวางแผนการเงิน” จริง ๆ แล้วเวลาเราได้ยินคำว่า “หุ้น” ส่วนใหญ่ก็จะรู้สึกว่ามันยากและไกลตัว ทั้งที่จริง ๆ มันสำคัญกับชีวิตมาก ก็เลยคิดว่า ถ้ามีแอปที่ช่วยให้คนเริ่มต้นเข้าใจพื้นฐานการลงทุนแบบง่าย ๆ ได้ก็คงดี เลยกลายมาเป็นไอเดียของโปรเจคนี้ค่ะ",
      },
      {
        id: 2,
        timestamp: 47,
        question: question[1],
        videoUrl: "https://www.youtube.com/watch?v=IWHzZudXmpQ",
        answer:
          "ไอเดียแรกเลย เราแค่อยากทำแอปที่จำลองสถานการณ์การซื้อหุ้นแบบเล่น ๆ เหมือนเกมค่ะ ให้คนเลือกซื้อ-ขาย แล้วดูผลลัพธ์แต่พอได้ลองรีเสิร์ชและคุยกับคนรอบตัวมากขึ้น เรารู้สึกว่า ถ้าจะให้โปรเจคนี้มีประโยชน์จริง ๆ มันต้องสอนให้คนเข้าใจตั้งแต่ “พื้นฐานจริง ๆ” อย่างเช่น หุ้นคืออะไร? ราคาเปลี่ยนยังไง? หรือเราจะรู้ได้ยังไงว่าควรซื้อหุ้นตัวไหน สุดท้ายเลยปรับมาเป็นแอปที่เน้นเรื่องการ “เรียนรู้ผ่านการลองอ่านและตอบคำถาม” มากขึ้นค่ะ",
      },
      {
        id: 3,
        timestamp: 91,
        question: question[2],
        videoUrl: "https://www.youtube.com/watch?v=IWHzZudXmpQ",
        answer:
          "สกิลที่สำคัญที่สุดในการทำโปรเจคนี้สำหรับเราคือ “การเข้าใจผู้ใช้” ค่ะ เพราะเราออกแบบแอปให้คนที่ไม่มีพื้นฐานด้านการลงทุนเลยมาใช้ ซึ่งหมายความว่า ทุกอย่างต้องง่ายและเป็นมิตรกับผู้เริ่มต้นจริง ๆ เราต้องพยายามใส่ตัวเองเข้าไปอยู่ในมุมมองของคนที่ไม่รู้อะไรเกี่ยวกับหุ้นเลย แล้วตั้งคำถามกับตัวเองว่า ถ้าเราไม่รู้เลยเราจะงงตรงไหน? เราจะอยากรู้อะไรบ้าง? หรือถ้าเราคือผู้ใช้ที่กลัวการลงทุน เราจะอยากเห็นอะไรบ้างที่ทำให้เรากล้าเริ่มต้นกระบวนการพวกนี้มันไม่ใช่แค่คิดแทนคนอื่นนะคะ แต่คือการ “รับฟัง” และ “ทดสอบ” อย่างต่อเนื่องด้วยต้องคอยเปิดใจรับฟีดแบค แล้วค่อย ๆ ปรับให้เนื้อหาและดีไซน์ตอบโจทย์ความเข้าใจของผู้ใช้ให้มากที่สุด เพราะท้ายเราไม่ได้ทำแอปที่สวยที่สุด หรือซับซ้อนที่สุด แต่เราทำแอปที่ เข้าใจง่ายที่สุด สำหรับคนที่อยากเริ่มต้นเรียนรู้เรื่องลงทุนค่ะ",
      },
      {
        id: 4,
        timestamp: 131,
        question: question[5],
        videoUrl: "https://www.youtube.com/watch?v=IWHzZudXmpQ",
        answer:
          "เวลารู้สึกเครียดหรือหมดไฟจากการทำโปรเจค สิ่งที่เราชอบทำที่สุดก็คือ “พาตัวเองออกจากความคิดเดิม ๆ ชั่วคราว” ค่ะเราจะออกไปหาอะไรอร่อย ๆ กินก่อนเลย อย่างน้อยการกินของอร่อยมันช่วยให้เรารู้สึกดีขึ้นจริง ๆ ดูคลิปที่ไม่ได้ต้องใช้สมองมาก อย่างพวกวิดีโอตลก อีกอย่างที่ช่วยมากคือ การเล่นเกมค่ะ โดยเฉพาะเกมที่ไม่เครียด เล่นได้เรื่อย ๆ มันเหมือนได้หนีออกไปอยู่ในอีกโลกหนึ่งแป๊บหนึ่ง แล้วพอรู้สึกดีขึ้น เราจะค่อย ๆ กลับมามีแรงทำต่อ การรู้จักพักให้เป็น สำคัญพอ ๆ กับการตั้งใจทำงานนะคะ เพราะถ้ายิ่งฝืน ทั้งผลงานและสุขภาพใจก็อาจจะพังไปพร้อมกัน การให้เวลากับตัวเองบ้าง ทำให้เรากลับมาโฟกัสกับโปรเจคได้อย่างมีพลังมากกว่าเดิมจริง ๆ ค่ะ",
      },
    ],
  },
  {
    id: 6,
    type: type[1],
    title: "HOMMIE",
    creator: "Piyanut Plaimee",
    creatorTh: "ปิยะณัฐ พลายมี",
    nickName: "Big",
    nickNameTh: "บิ๊ก",
    studentId: "134",
    thesisTh:
      "การออกแบบและพัฒนาพัฒนาแพลตฟอร์มส่งเสริมกิจกรรมครอบครัว กรณีศึกษาครอบครัวเดี่ยว และครอบครัวพ่อหรือแม่เลี้ยงเดี่ยว",
    thesis:
      "Design and Development of a Platform to Promote Family Activities: A Case Study of Nuclear Families and Single-Parent Families",
    logoUrl: `${imageUrl}/${logoUrl}/134/big_logo.png`,
    category: "Families",
    advisor: `${advisor[0]}`,
    scopeTh:
      "พัฒนาเว็บแอปพลิเคชันบนสมาร์ทโฟนเพื่อเป็นเครื่องมือส่งเสริมความสัมพันธ์ในครอบครัวสำหรับครอบครัวเดี่ยวและครอบครัวเลี้ยงเดี่ยว โดยมุ่งอำนวยความสะดวกและเพิ่มประสิทธิภาพในการเข้าถึงกิจกรรมที่สามารถทำร่วมกันได้ นอกเหนือจากการรับประทานอาหาร",
    scope:
      "To develop a smartphone web application that serves as a tool to promote family relationships for nuclear and single-parent families. The application will focus on facilitating and enhancing access to shared activities beyond dining together.",
    ideaConceptTh:
      "แพลตฟอร์มที่เป็นศูนย์กลางสำหรับครอบครัวในการสร้างสรรค์และทำกิจกรรมร่วมกัน โดยเป็นพื้นที่สำหรับแลกเปลี่ยนและประยุกต์ใช้ไอเดียกิจกรรมจากครอบครัวอื่น พร้อมทั้งมีกิจกรรมให้ร่วมสนุกได้บนแพลตฟอร์มโดยตรง เพื่อเป็นตัวช่วยให้ครอบครัวที่มีเวลาจำกัดสามารถสร้างความสัมพันธ์ที่แน่นแฟ้นยิ่งขึ้น",
    ideaConcept:
      "A central platform for families to create and engage in shared activities. It functions as a hub where families can exchange and adapt activity ideas from one another, while also offering interactive activities directly on the platform. The goal is to assist time-constrained families in building stronger bonds.",
    codingLanguage: ["HTML", "Tailwind CSS", "Javascript", "Typescript"],
    databaseSystem: ["Mysql"],
    codingTool: ["Visual Studio Code"],
    designTool: ["Figma"],
    targetGroup: "Nuclear Families and Single-Parent Families",
    targetGroupTh:
      "ครอบครัวเดี่ยว และครอบครัวพ่อหรือแม่เลี้ยงเดี่ยว ที่มีลูกวัย 8-12 ปี",
    comments: [
      "ปรับปรุงเรื่องความต่อเนื่องในการใช้งาน",
      "อยากให้ใช้ได้ในหลายแพลตฟอร์ม",
      "อยากให้มี option เพิ่มเติมสำหรับอัพเดทแบบ realtime",
    ],
    functions: [
      {
        id: 1,
        title_en: "Post or share family activities",
        title_th: "โพสต์ หรือแชร์กิจกรรมครอบครัว",
      },
      {
        id: 2,
        title_en: "Doing family activities",
        title_th: "การทำกิจกรรมครอบครัว",
      },
      {
        id: 3,
        title_en: "Create or join a family",
        title_th: "สร้าง หรือเข้าร่วมครอบครัว",
      },
    ],
    projectInfoImageUrl: [
      `${imageUrl}/${projectInfoUrl}/134/big_01.png`,
      `${imageUrl}/${projectInfoUrl}/134/big_02.png`,
      `${imageUrl}/${projectInfoUrl}/134/big_03.png`,
    ],
    testImageUrl: [
      `${imageUrl}/${testUrl}/134/big_01.png`,
      `${imageUrl}/${testUrl}/134/big_02.png`,
      `${imageUrl}/${testUrl}/134/big_03.png`,
      `${imageUrl}/${testUrl}/134/big_04.png`,
    ],
    keyFunctionImageUrl: `${imageUrl}/${keyFunctionUrl}/134/big_01.png`,
    mainProfile: `${imageUrl}/${profileUrl}/134/Big_mainProfile.JPG`,
    subProfile: `${imageUrl}/${profileUrl}/134/Big_subProfile.JPG`,
    screenShots: [
      `${imageUrl}/${screenshotsUrl}/134/big_01.png`,
      `${imageUrl}/${screenshotsUrl}/134/big_02.png`,
      `${imageUrl}/${screenshotsUrl}/134/big_03.png`,
      `${imageUrl}/${screenshotsUrl}/134/big_04.png`,
      `${imageUrl}/${screenshotsUrl}/134/big_05.png`,
    ],
    designTestScore: "4.20",
    usefulTestScore: "3.09",
    titleInfographic:
      "ปัญหาของการไม่มีเวลาร่วมกัน หรือการไม่มีปฎิสัมพันธ์ในครอบครัว",
    infographicUrl: `${imageUrl}/${infographicUrl}/134/big_infographic.png`,
    descriptionInfographic:
      "การชี้ให้เห็นถึงปัญหาของการไม่มีเวลาร่วมกัน หรือการไม่มีปฎิสัมพันธ์ในครอบครัว แสดงให้เห็นถึงข้อเสียของการที่พ่อแม่ไม่มีเวลาให้ลูก อาจทำให้เกิดปัญหาที่ส่งผลกระทบด้านร่างกายและจิตใจของลูกได้",
    quote: "ตอนเขียนเขียนโค้ดสมองบอก error แต่พอมองหน้าเธอแล้วสมองบอกเออรัก",
    email: "plaimee.tunayip@gmail.com",
    linkedIn: "https://www.linkedin.com/in/piyanut-plaimee-41670826b",
    afterExhibited:
      "เหมือนได้ยกภูเขาออกจากอกครับ ในที่สุดเราก็สามารถทำตามความควาดหวังของพ่อแม่ และตัวเองได้ รู้ตัวอีกทีก็ผ่านเรื่องราว ล้มลุกมานานมาก ได้ทำอะไรที่ไม่คิดว่าจะได้ทำ แล้วก็ได้ลองสิ่งใหม่ๆอยู่เสมอ ทำให้ตอนนี้ไม่กลัวที่จะต้องเรียนรู้อะไรใหม่ๆ แต่รู้สึกว่าสนุกกับการได้เรียนรู้มัน",
    ToolRecommended: [
      { id: 1, tool: tools[1] },
      {
        id: 2,
        tool: tools[6],
      },
    ],
    interviewCover: `${imageUrl}/${insightCover}/interview_134.png`,
    interview: [
      {
        id: 1,
        timestamp: 9,
        question: question[0],
        videoUrl: "https://www.youtube.com/watch?v=c-KeZgnhtfg",
        answer:
          "ได้แรงบัลดาลใจมาจากหลานครับ เพราะว่าพ่อแม่เขาต้องออกไปทำงาน ทำให้ไม่ค่อยมีเวลาครอบครัวกับพ่อแม่ครับ ผมอยากให้หลานได้มีปฎิสัมพันธ์กับครอบครัวของเขา ไม่อยากเห็นเขาอยู่คนเดียวหลังจากเลิกเรียน จึงคิดคอนเซ็ปต์โปรเจคนี้ขึ้นมาเพื่อแก้ปัญหาให้หลานครับ",
      },
      {
        id: 2,
        timestamp: 35,
        question: question[1],
        videoUrl: "https://www.youtube.com/watch?v=c-KeZgnhtfg",
        answer:
          "อยากทำ Web Application ที่ช่วยให้ตั้งเป้าหมายระยะสั้นโดยใช้ AI เข้ามาช่วยจัดการวางเป้าหมายขั้นต่อไป และยัง generate รูปภาพที่ผู้ใช้สำเร็จเป้าหมายในแต่ละขั้นได้ เพื่อให้ผู้ใช้ได้เห็นผลลัพธ์ระหว่างทาง และเพิ่มแรงจูงใจในการทำตามเป้าหมายครับ",
      },
      {
        id: 3,
        timestamp: 64,
        question: question[2],
        videoUrl: "https://www.youtube.com/watch?v=c-KeZgnhtfg",
        answer:
          "การจัดการอารมณ์ และความรู้สึกครับ เนื่องจากต้องรับความกดดัน ความคาดหวัง จากอาจารย์ที่ปรึกษาจุลนิพนธ์ คณะอาจารย์กรรมการตรวจจุลนิพนธ์ และความกดดันที่เรามอบให้กับตัวเองในการทำโปรเจคให้ดีตามความคาดหวังของอาจารย์ที่ปรึกษาครับ",
      },
      {
        id: 4,
        timestamp: 91,
        question: question[5],
        videoUrl: "https://www.youtube.com/watch?v=c-KeZgnhtfg",
        answer:
          "วางงานทั้งหมด แล้วออกไปใช้ชีวิต ยกตัวอย่างคือ หาวันหยุดให้ตัวเอง 1 วัน จะต้องเป็น 1 วันที่ไม่ยุ่งเกี่ยวกับงานโปรเจ็ค หรือคอมพิวเตอร์เลย ให้ออกไปทำกิจกรรมข้างนอกแทน หรือออกไปเที่ยว หาของอร่อยๆกิน จะทำให้รู้สึกสดชื่นขึ้น และรีเซ็ตตัวเองไปในตัว",
      },
    ],
  },
  {
    id: 7,
    type: type[1],
    title: "BEYOU",
    creator: "Silpsupa Sereesuchart",
    creatorTh: "ศิลป์สุภา เสรีสุชาติ",
    nickName: "Bouquet",
    nickNameTh: "บูเก้",
    studentId: "136",
    thesisTh:
      "การพัฒนาเว็บแอปพลิเคชันสำหรับการเลือกซื้อเครื่องสำอางให้เหมาะสมกับตนเอง",
    thesis:
      "Develop a web application for choosing cosmetics that is suitable for yourself",
    logoUrl: `${imageUrl}/${logoUrl}/136/bouquet_logo.png`,
    category: "University Students",
    advisor: `${advisor[0]}`,
    scopeTh:
      " การพัฒนาเว็บแอปพลิเคชันเพื่อช่วยให้ผู้บริโภคสามารถเลือกซื้อเครื่องสำอางที่เหมาะสมกับลักษณะเฉพาะบุคคลของตนเอง เช่น ประเภทผิว สีผิว ความแพ้ง่าย และปัญหาผิวเฉพาะ โดยระบบจะทำหน้าที่รวบรวมและวิเคราะห์ข้อมูลผู้ใช้ เพื่อนำเสนอผลิตภัณฑ์ที่ตรงกับความต้องการอย่างมีประสิทธิภาพ ช่วยลดความเสี่ยงจากการเลือกใช้ผลิตภัณฑ์ผิดประเภท และเพิ่มความมั่นใจในการตัดสินใจซื้อ",
    scope:
      "The development of a web application to assist consumers in selecting cosmetics that suit their individual characteristics, such as skin type, skin tone, sensitivity, and specific skin concerns. The system will collect and analyze user information to recommend suitable products effectively, helping to reduce the risk of using inappropriate products and increasing confidence in purchasing decisions.",
    ideaConceptTh:
      "จุลนิพนธ์ฉบับนี้มีวัตถุประสงค์เพื่อพัฒนาเว็บแอปพลิเคชันที่ช่วยให้ผู้บริโภคสามารถเลือกซื้อเครื่องสำอางให้เหมาะสมกับตนเอง ลดความเสี่ยงจากการเกิดอาการแพ้หรือการใช้ผลิตภัณฑ์ที่ไม่สอดคล้องกับสภาพผิวของตนเอง ซึ่งมักเกิดจากความไม่เข้าใจในส่วนผสม คุณภาพ หรือคุณสมบัติของเครื่องสำอาง ส่งผลให้เกิดปัญหาทางผิวหนัง สูญเสียความมั่นใจ และสิ้นเปลืองค่าใช้จ่ายโดยไม่จำเป็น",
    ideaConcept:
      "This thesis aims to develop a web application that assists consumers in selecting cosmetics that are suitable for their individual needs. The goal is to reduce the risk of allergic reactions or the use of products that are incompatible with their skin type—issues often caused by a lack of understanding about cosmetic ingredients, quality, or properties. Such problems can lead to skin issues, loss of confidence, and unnecessary expenses.",
    codingLanguage: ["PHP", "HTML", "CSS", "JavaScript"],
    databaseSystem: ["MySQL"],
    codingTool: ["Visual Studio Code"],
    designTool: ["Figma", "Adobe illustrator", "Adobe Photoshop"],
    targetGroup:
      "The target group is individuals aged 15–20 of all genders who regularly purchase and frequently use cosmetics.",
    targetGroupTh:
      "กลุ่มเป้าหมาย คือ กลุ่มคนที่ อายุ 15-20 ปี ทุกเพศ ผู้ที่มีการเลือกซื้อเครื่องสำอางอยู่เป็นประจำ มีการใช้เครื่องสำอางบ่อยครั้ง",
    comments: [
      "ชอบฟิลเตอร์กรองสินค้ามากค่ะ เพราะแปลกใหม่ไม่เคยเห็นมาก่อน และสามารถค้นหาเครื่องสำอางที่เหมาะกับเราได้ง่ายมากขึ้น",
      "อยากให้มีเทคโนโลยีที่ทันสมัยมาช่วยเรื่องการทดสอบหาสภาพผิว เพื่อความสะดวกกว่านี้",
      "อยากกให้มีระบบจ่ายเงินช่องทางอื่นๆด้วย",
    ],
    functions: [
      {
        id: 1,
        title_en: "A personalized cosmetic selection system",
        title_th: "ระบบการเลือกซื้อเครื่องสำอางที่เหมาะสมกับตนเอง",
      },
      {
        id: 2,
        title_en: "A skin condition check system prior to cosmetic selection",
        title_th: "ระบบตรวจเช็กสภาพผิวก่อนเลือกซื้อเครื่องสำอาง",
      },
      {
        id: 3,
        title_en: "A product filter to match individual needs",
        title_th: "ฟิลเตอร์กรองสินค้าให้ได้ตรงตามความเหมาะสมของตนเอง",
      },
    ],
    projectInfoImageUrl: [
      `${imageUrl}/${projectInfoUrl}/136/bouquet_01.png`,
      `${imageUrl}/${projectInfoUrl}/136/bouquet_02.png`,
      `${imageUrl}/${projectInfoUrl}/136/bouquet_03.png`,
    ],
    testImageUrl: [
      `${imageUrl}/${testUrl}/136/bouquet_01.png`,
      `${imageUrl}/${testUrl}/136/bouquet_02.png`,
      `${imageUrl}/${testUrl}/136/bouquet_03.png`,
      `${imageUrl}/${testUrl}/136/bouquet_04.png`,
    ],
    keyFunctionImageUrl: `${imageUrl}/${keyFunctionUrl}/136/bouquet_01.png`,
    mainProfile: `${imageUrl}/${profileUrl}/136/Bouquet_mainProfile.JPG`,
    subProfile: `${imageUrl}/${profileUrl}/136/Bouquet_subProfile.JPG`,
    screenShots: [
      `${imageUrl}/${screenshotsUrl}/136/bouquet_01.png`,
      `${imageUrl}/${screenshotsUrl}/136/bouquet_02.png`,
      `${imageUrl}/${screenshotsUrl}/136/bouquet_03.png`,
      `${imageUrl}/${screenshotsUrl}/136/bouquet_04.png`,
      `${imageUrl}/${screenshotsUrl}/136/bouquet_05.png`,
    ],
    designTestScore: "4.20",
    usefulTestScore: "3.90",
    titleInfographic: "5 สารที่คนผิวแพ้ง่ายควรรู้",
    infographicUrl: `${imageUrl}/${infographicUrl}/136/bouquet_infographic.png`,
    descriptionInfographic:
      "เครื่องสำอางทุกประเภทมักจะมีสารเคมีที่ใส่มาเพื่อทำให้เครื่องสำอางมีความน่าใช้หรือช่วยเพิ่มมูลค่าของสินค้าให้มากขึ้น แต่ในทางกลับกันก็สามารถทำให้เกิดผลข้างเคียงกับผู้บริโภคได้ โดยเฉพาะคนที่มีผิวแพ้ง่าย ผิวจะบอบบางและไวต่อการระคายเคือง ทำให้เกิดอาการแพ้ได้",
    quote: "ถ้าเหนื่อยก็พัก ถึงไม่รักก็ต้องทำต่อ",
    email: "silpsupa.sereesuchart@gmail.com",
    linkedIn: "www.linkedin.com/in/silpsupa-sereesuchart",
    afterExhibited:
      "เราเต็มที่ในทุกๆด้านแล้ว ถ้าเกิดเรายังมองว่างานเรายังดีไม่พอก็ไม่เป็นไรเลย เพราะนี่เป็นแค่จุดเริ่มต้นเท่านั้น มันไม่มีอะไรบนโลกนี้ที่จะสมบูรณ์แบบไปทุกอย่างอยู่แล้ว ไม่ว่าที่ผ่านมามันจะหนักแค่ไหน แต่ก็ขอให้รู้ไว้ว่าตอนนี้เราผ่านมันมาได้แล้ว เก่งมากเลยนะ",
    ToolRecommended: [
      { id: 1, tool: tools[1] },
      {
        id: 2,
        tool: tools[2],
      },
    ],
    interviewCover: `${imageUrl}/${insightCover}/interview_136.png`,
    interview: [
      {
        id: 1,
        timestamp: 17,
        question: question[0],
        videoUrl: "https://www.youtube.com/watch?v=o2mJAaBwOLc",
        answer:
          "เริ่มต้นจากตัวเองเลยค่ะ ปกติเป็นคนที่ชอบแต่งหน้าอยู่แล้ว เราก็จะชอบในการซื้อเครื่องสำอางใหม่อยู่บ่อยๆ แล้วก็เจอปัญหาบ่อยครั้งค่ะ ที่เวลาเราซื้อเครื่องสำอาง โดยเฉพาะการซื้อเครื่องสำอางผ่านร้านค้าออนไลน์ก็มักจะพบปัญหาเรื่อง เครื่องสำอางที่ซื้อมาใช้แล้ว เกิดอาการแพ้ ใช้แล้วเกิดสิวอักเสบ หรือไม่เหมาะกับสภาพผิว ซึ่งทำให้เกิดความไม่มั่นใจในผิวหน้า หรือความเสียดายเงินที่ซื้อมาแล้วไม่สามารถใช้งานได้จริงค่ะ จึงเป็นจุดเริ่มต้นที่คิดว่าจะดีกว่าไหมถ้าเราสามารถลดความเสี่ยงในการเลือกซื้อเครื่องสำอางในแต่ละครั้งได้ เพื่อให้ได้เครื่องสำอางที่เหมาะสมกับตนเองมากที่สุด",
      },
      {
        id: 2,
        timestamp: 59,
        question: question[1],
        videoUrl: "https://www.youtube.com/watch?v=o2mJAaBwOLc",
        answer:
          "ไอเดียแรกเป็นไอเดียเกี่ยวกับ personal color ค่ะ เพราะคิดว่าการเลือกเฉดสีเครื่องสำอางในแต่งหน้าแต่หรือแต่งตัวแต่ละครั้งเป็นสิ่งที่มีรายละเอียดค่อนข้างมากจึงอยากสร้างอะไรใหม่ๆที่ทำให้การใช้หลัก personal color ใช้งานได้ง่ายและสะดวกมากขึ้นค่ะ",
      },
      {
        id: 3,
        timestamp: 83,
        question: question[4],
        videoUrl: "https://www.youtube.com/watch?v=o2mJAaBwOLc",
        answer:
          "รู้สึกดีใจที่ได้จัดนิทรรศการให้คนอื่นได้มาชมผลงานต่างๆ ได้แลกเปลี่ยนความคิดเห็นในมุมมองของเราที่เป็นคนทำและมุมมองของคนที่มาดูงาน ถือได้ว่าช่วยให้เราได้ลอง",
      },
      {
        id: 4,
        timestamp: 111,
        question: question[5],
        videoUrl: "https://www.youtube.com/watch?v=o2mJAaBwOLc",
        answer:
          "ส่วนมากจะใช้วิธีการพูดคุยกับเพื่อน หาของกินอร่อยๆ ไปเที่ยว หากิจกรรมที่ชอบทำค่ะ อาจจะไม่ได้ช่วยได้มากแต่ก็ถือว่าในหนึ่งวันเราก็มีเวลาสัก2-3ชั่วโมงที่สามารถมีความสุข ไม่เครียดและไม่กังวลในการทำงานได้บ้างก็ถือว่าเป็นเรื่องที่ดีค่ะ และที่สำคัญเลือกฟังแต่สิ่งที่เป็นประโยชน์ค่ะ คำพูดหรือการกระทำอะไรที่ทำให้เกิดความรู้สึกบั่นทอนจิตใจ ถึงแม้มันจะยากแต่ก็อยากให้พยายามตัดมันทิ้งออกไปค่ะ เพราะนอกจากมันจะไม่ได้ช่วยอะไรแล้วยังทำให้จิตใจของเราแย่ลงอีกด้วยค่ะ",
      },
    ],
  },
  {
    id: 8,
    type: type[0],
    title: "Clowney",
    creator: "Waralee Patsarn",
    creatorTh: "วราลี พัฒน์สาร",
    nickName: "Petch",
    nickNameTh: "เพชร",
    studentId: "135",
    thesisTh:
      "การออกแบบและพัฒนาสื่อปฏิสัมพันธ์เพื่อส่งเสริมพัฒนาการด้านกล้ามเนื้อ กรณีศึกษาเด็กประถมศึกษาปีที่ 1",
    thesis:
      "Design and development of interactive media to promote muscle development: a case study of first grade primary school children",
    logoUrl: `${imageUrl}/${logoUrl}/135/petch_logo.png`,
    category: "Elementary School Children",
    advisor: `${advisor[5]}`,
    scopeTh:
      "เป็นสื่อปฏิสัมพันธ์เพื่อส่งเสริมพัฒนาการด้านกล้ามเนื้อ กรณีศึกษาเด็กประถมศึกษาปีที่ 1 เพื่อให้เด็กประถมศึกษาปีที่ 1 ได้เสริมสร้างเสริมพัฒนาการด้านกล้ามเนื้อโดยผ่านการเล่นเกมต่างๆ",
    scope:
      "It is an interactive media to promote muscle development. Case study of primary school children, grade 1, to allow primary school children, grade 1, to enhance muscle development through playing various games.",
    ideaConceptTh:
      "ในวัยประถมศึกษา โดยเฉพาะช่วงอายุ 6-7 ปี (ประถมศึกษาปีที่ 1) เป็นช่วงเวลาสำคัญของพัฒนาการทั้งด้านร่างกาย จิตใจ และสังคม โดยเฉพาะพัฒนาการด้านกล้ามเนื้อ ซึ่งแบ่งออกเป็น กล้ามเนื้อมัดใหญ่ (Gross Motor Skills) และ กล้ามเนื้อมัดเล็ก (Fine Motor Skills) เช่น การเคลื่อนไหวแขน-ขา การจับปากกาเขียนหนังสือ และการทรงตัวที่เหมาะสม การพัฒนากล้ามเนื้อในวัยนี้มีบทบาทสำคัญในการเสริมสร้างทักษะทางการเรียนรู้และการดำรงชีวิตประจำวันอย่างมีประสิทธิภาพ หากเด็กมีพัฒนาการด้านกล้ามเนื้อที่ล่าช้าหรือไม่เหมาะสม อาจส่งผลกระทบต่อความสามารถในการเขียนหนังสือ การเล่นกีฬา และการทำกิจกรรมประจำวัน ทั้งนี้ยังอาจมีผลกระทบทางจิตใจ เช่น การขาดความมั่นใจ การถูกเพื่อนล้อเลียน และส่งผลต่อความพร้อมในการเรียนรู้ของเด็กในระยะยาว",
    ideaConcept:
      "In primary school, especially the age of 6-7 years (grade 1), is an important period for physical, mental, and social development, especially muscle development, which is divided into large muscles (Gross Motor Skills) and small muscles (Fine Motor Skills), such as arm-leg movement, holding a pen for writing, and proper balance. Muscle development at this age plays an important role in enhancing learning skills and effective daily living. If children have delayed or inappropriate muscle development, it may affect their ability to write, play sports, and do daily activities. It may also have psychological effects, such as lack of confidence, being teased by friends, and affecting children's readiness to learn in the long term.",
    codingLanguage: ["PHP", "C#", "JavaScript"],
    databaseSystem: ["MySQL"],
    codingTool: ["Visual Studio Code", "Unity", "Arduino"],
    designTool: ["Figma", "Adobe Illustrator", "Photoshop"],
    targetGroup: "Group of primary school students, aged 6-7 years",
    targetGroupTh: "กลุ่มนักเรียนวัยประถมต้น อายุ 6-7 ปี",
    comments: [
      "อยากให้มีการอัปเดตเกมใหม่ๆ เพื่อไม่สร้างความน่าเบื่อ ",
      "เกมสนุกมากๆเหมือนได้ประมวลผลตลอดการเล่น",
      "อยากให้มีระบบแข่งขันกันระหว่าง2คนมันน่าจะสนุก",
    ],
    functions: [
      {
        id: 1,
        title_en: "Exercise small muscles",
        title_th: "บริหารกล้ามเนื้อมัดเล็ก",
      },
      {
        id: 2,
        title_en: "Exercise large muscle groups",
        title_th: "บริหารกล้ามเนื้อมัดใหญ่",
      },
      {
        id: 3,
        title_en: "Enhance vocabulary knowledge",
        title_th: "เสริมความรู้คำศัพท์",
      },
    ],
    projectInfoImageUrl: [
      `${imageUrl}/${projectInfoUrl}/135/petch_01.png`,
      `${imageUrl}/${projectInfoUrl}/135/petch_02.png`,
      `${imageUrl}/${projectInfoUrl}/135/petch_03.png`,
    ],
    testImageUrl: [
      `${imageUrl}/${testUrl}/135/petch_01.png`,
      `${imageUrl}/${testUrl}/135/petch_02.png`,
      `${imageUrl}/${testUrl}/135/petch_03.png`,
      `${imageUrl}/${testUrl}/135/petch_04.png`,
    ],
    keyFunctionImageUrl: `${imageUrl}/${keyFunctionUrl}/135/petch_01.png`,
    mainProfile: `${imageUrl}/${profileUrl}/135/Petch_mainProfile.JPG`,
    subProfile: `${imageUrl}/${profileUrl}/135/Petch_subProfile.JPG`,
    screenShots: [
      `${imageUrl}/${screenshotsUrl}/135/petch_01.png`,
      `${imageUrl}/${screenshotsUrl}/135/petch_02.png`,
      `${imageUrl}/${screenshotsUrl}/135/petch_03.png`,
      `${imageUrl}/${screenshotsUrl}/135/petch_04.png`,
      `${imageUrl}/${screenshotsUrl}/135/petch_05.png`,
    ],
    designTestScore: "4.20",
    usefulTestScore: "4.30",
    titleInfographic: "พัฒนาการกล้ามเนื้อเด็กผ่านการเรียนรู้ที่สนุก",
    infographicUrl: `${imageUrl}/${infographicUrl}/135/petch_infographic.jpg`,
    descriptionInfographic:
      "การเรียนรู้ผ่านการเล่นอย่างสนุกสนาน พัฒนาการด้านกล้ามเนื้อมัดเล็กและกล้ามเนื้อมัดใหญ่  ซึ่งเป็นรากฐานสำคัญต่อพัฒนาการด้านร่างกาย อารมณ์ สังคม และการเรียนรู้ในอนาคต",
    quote: "เราไม่จำเป็นต้องเก่งทุกอย่างอ่อนแอบ้างก็ได้",
    email: "wpatsarn@gmail.com",
    linkedIn: "https://www.linkedin.com/in/waralee-patsarn/",
    afterExhibited:
      "ทั้งตื่นเต้นและกดดันในเวลาเดียวกัน เพราะเป็นครั้งแรกที่ต้องรับผิดชอบหลายอย่าง แต่พอได้ลงมือทำจริงๆ ก็รู้สึกสนุกและได้พัฒนาทักษะที่สำคัญคือได้เห็นผลงานของตัวเองเกิดขึ้นจริง และมีคนให้ความสนใจ ก็รู้สึกภาคภูมิใจมากค่ะ",
    ToolRecommended: [
      { id: 1, tool: tools[1] },
      {
        id: 2,
        tool: tools[2],
      },
      {
        id: 3,
        tool: tools[3],
      },
    ],
    interviewCover: `${imageUrl}/${insightCover}/interview_135.png`,
    interview: [
      {
        id: 1,
        timestamp: 12,
        question: question[0],
        videoUrl: "https://www.youtube.com/watch?v=SLzf2M7HWO0",
        answer:
          "จุดเริ่มต้นของโปรเจคนี้เกิดจากการเล็งเห็นถึงปัญหาในพัฒนากล้ามเนื้อของเด็กในวัยประถมศึกษาๅ ซึ่งเป็นช่วงวัยที่พัฒนาการมีความสำคัญอย่างมากค่ะ",
      },
      {
        id: 2,
        timestamp: 40,
        question: question[1],
        videoUrl: "https://www.youtube.com/watch?v=SLzf2M7HWO0",
        answer:
          "เว็บเรียนรู้ภาษามือในประเทศไทย 5555 แบบว่าอยากมากค่ะ ทำแต่ไอเดียนี้ต้องหยุดลงเพราะความตันของการแก้ปัญหาค่ะ ไม่มีความแปลกใหม่",
      },
      {
        id: 3,
        timestamp: 63,
        question: question[3],
        videoUrl: "https://www.youtube.com/watch?v=SLzf2M7HWO0",
        answer:
          "อยากทำให้มันสมบูรณ์มากกว่านี้ และเพิ่มอะไรใหม่ๆเข้าไปค่ะเพิ่มความสนุกความสมเหตุสมผลมากว่านี้",
      },
      {
        id: 4,
        timestamp: 80,
        question: question[5],
        videoUrl: "https://www.youtube.com/watch?v=SLzf2M7HWO0",
        answer:
          "เราจะหยุดทำทุกอย่างแล้วก็หาเกมเล่นค่ะ ไม่ก็นั่งฟังเพลงพักผ่อนให้เพียงพอ เราไม่จำเป็นต้องเข้มแข็งตลอดเวลา พักได้ ร้องไห้ได้ แล้วค่อยเริ่มใหม่ก็ได้ค่ะ",
      },
    ],
  },
  {
    id: 9,
    type: type[0],
    title: "Flowa",
    creator: "Parichart Nuaon",
    creatorTh: "ปาริชาต หนูอ้น",
    nickName: "Pupae",
    nickNameTh: "ปูเป้",
    studentId: "237",
    thesisTh:
      "การออกแบบและพัฒนาสื่อปฏิสัมพันธ์เพื่อเสริมสร้างความรู้พื้นฐานด้านการเขียนโปรแกรมสำหรับเด็กมัธยมต้น",
    thesis:
      "Design and development of interactive media to enhance foundational knowledge in programming for middle school students",
    logoUrl: `${imageUrl}/${logoUrl}/237/pupae_logo.png`,
    category: "High School Students",
    advisor: `${advisor[5]}`,
    scopeTh:
      "โฟลว์วา สื่อปฏิสัมพันธ์ที่จะให้น้อง ๆ ได้เรียนรู้การเรียนเขียนโปรแกรมขั้นพื้นฐานผ่านการเรียนแบบ Block Based Learning เพียงแค่ใช้อุปกรณ์ไอแพดสแกนคิวอาร์โค้ดและสามารถเข้าเล่นได้ ด้วยการพายานอวกาศไปถึงจุดหมาย ประกอบไปด้วยการเก็บธง ซึ่งจะมีตัวเลือกที่เมื่อตอบจะทำให้ยานอวกาศพาไปถึงที่หมายได้ ตามที่น้อง ๆ สั่ง และในส่วนของคุณครูเพียงแค่เปิดเว็บและเก็บข้อมูลนักเรียน เมื่อน้อง ๆ เล่นเสร็จก็จะทราบผลในทันที",
    scope:
      "Flowa is an interactive learning platform designed to help young learners grasp the fundamentals of programming through block-based learning. By simply using an iPad to scan a QR code, students can access the game and begin their journey — piloting a spaceship toward its destination. Along the way, they collect flags, each presenting them with choices that, when answered correctly, will guide the spaceship as per their commands. The experience is both engaging and educational, allowing learners to explore logic and sequencing in a fun and interactive way. For teachers, it’s just as simple. They only need to open the web platform to monitor and collect student data. Once students complete the activity, their results are instantly available.",
    ideaConceptTh:
      "นิยามการเรียนรู้การเขียนโปรแกรม ด้วยวิธี Block Based Learning คือการที่เราใช้คำสั่งผ่านบล็อกที่มีวิชวลที่สวยงาม ในการควบคุมทิศทางของยานอวกาศให้ไปถึงจุดหมาย โดยไม่ต้องเขียนโค้ดแม้แต่บรรทัดเดียว ด้วยนิยามนี้จะทำให้เด็กสามารถเข้าถึงการเขียนโปรแกรมได้ง่ายขึ้น และยังสนุกอีกด้วย",
    ideaConcept:
      "Block-Based Learning is a method of learning programming by using visually appealing blocks to issue commands — in this case, to control the direction of a spaceship and guide it to its destination, all without writing a single line of code. This approach makes programming more accessible and enjoyable for children, allowing them to grasp core coding concepts through an engaging and intuitive interface.",
    codingLanguage: ["PHP", "HTML", "CSS", "C#"],
    databaseSystem: ["MySQL"],
    codingTool: ["Visual Studio Code", "Unity"],
    designTool: ["Figma", "Adobe illustrator", "Adobe Photoshop"],
    targetGroup:
      "Children aged 12–13, who are in lower secondary school (Grade 7 or early middle school), are in a stage of active learning and are often interested in games and frequently engaged with technology.",
    targetGroupTh:
      "เด็กที่มีอายุ 12-13 ปี ซึ่งอยู่ในช่วงมัธยมที่ 1 หรือมัธยมต้นที่กำลังเรียนรู้ และชอบเล่นเกม อยู่กับเทคโนโลยีบ่อย ๆ",
    comments: [
      "เกมสนุกดีค่ะ ได้ฝึกคิดและกราฟิกดูเข้าถึงง่าย",
      "เว็บไซต์ใช้งานได้ง่าย สามารถเข้าถึงข้อมูลได้ และมีความสะดวก",
      "อยากให้มีการทดลองเล่นก่อนเริ่มเกม",
    ],
    functions: [
      {
        id: 1,
        title_en: "Collect Data Insight",
        title_th: "ฟังก์ชันการเก็บข้อมูลนักเรียน",
      },
      {
        id: 2,
        title_en: "Evaluate performance",
        title_th: "ฟังก์ชันการประเมินผลภายในห้องเรียน",
      },
      {
        id: 3,
        title_en: "Mini Game",
        title_th: "มินิเกมเกี่ยวกับโค้ดดิ้งสำหรับนักเรียน",
      },
    ],
    projectInfoImageUrl: [
      `${imageUrl}/${projectInfoUrl}/237/pupae_01.png`,
      `${imageUrl}/${projectInfoUrl}/237/pupae_02.png`,
      `${imageUrl}/${projectInfoUrl}/237/pupae_03.png`,
    ],
    testImageUrl: [
      `${imageUrl}/${testUrl}/237/pupae_01.png`,
      `${imageUrl}/${testUrl}/237/pupae_02.png`,
      `${imageUrl}/${testUrl}/237/pupae_03.png`,
      `${imageUrl}/${testUrl}/237/pupae_04.png`,
    ],
    keyFunctionImageUrl: `${imageUrl}/${keyFunctionUrl}/237/pupae_01.png`,
    mainProfile: `${imageUrl}/${profileUrl}/237/Pupae_mainProfile.JPG`,
    subProfile: `${imageUrl}/${profileUrl}/237/Pupae_subProfile.JPG`,
    screenShots: [
      `${imageUrl}/${screenshotsUrl}/237/pupae_01.png`,
      `${imageUrl}/${screenshotsUrl}/237/pupae_02.png`,
      `${imageUrl}/${screenshotsUrl}/237/pupae_03.png`,
      `${imageUrl}/${screenshotsUrl}/237/pupae_04.png`,
      `${imageUrl}/${screenshotsUrl}/237/pupae_05.png`,
    ],
    designTestScore: "4.20",
    usefulTestScore: "4.08",
    titleInfographic: "เริ่มต้นเขียนโปรแกรมด้วย Block Base Learning",
    infographicUrl: `${imageUrl}/${infographicUrl}/237/pupae_infographic.png`,
    descriptionInfographic:
      "การเรียนรูู้การเขียนโปรแกรมสามารถเริ่มต้นได้จากการเรียนรู้แบบภาพก่อน ซึ่งจะทำให้เราเข้าใจหลักการการเขียนโปรแกรมผ่านการคิด การแก้ปัญหาแบบเป็นระบบ",
    quote: "อะไรไม่ได้ก็อย่าฝืน อย่าอุรังอุตังให้มันมากนักเลย",
    email: "p.ariaprnavy@gmail.com",
    linkedIn: "https://www.linkedin.com/in/parichat-nuaon/",
    afterExhibited:
      "ทั้้งเครียดและท้าทายผสม ๆ กันไป แต่หลังจากที่ผ่านมาได้ก็รู้สึกภูมิใจในตัวเองมาก ๆ ที่อะไรไม่เคยได้ทำ ก็ได้ลองทำ ตอนแรกคิดว่ามีเวลาทำโปรเจคนานมาก แต่พอเวลาผ่านไป มันไม่นานเลย เหนื่อย สนุก ร้องไห้ แต่เราเก่งมากเลย",
    ToolRecommended: [
      { id: 1, tool: tools[7] },
      {
        id: 2,
        tool: tools[0],
      },
      {
        id: 3,
        tool: tools[8],
      },
    ],
    interviewCover: `${imageUrl}/${insightCover}/interview_237.png`,
    interview: [
      {
        id: 1,
        timestamp: 14,
        question: question[0],
        videoUrl: "https://www.youtube.com/watch?v=kIJhvPj5IC4",
        answer:
          "จุดเริ่มต้นของโปรเจคนี้ เกิดจากตอนมัธยมเรียนไม่ค่อยรู้เรื่องค่ะ ก็ลองคิดดูว่ามีวิชาไหนที่เรารู้สึกว่าเรียนไม่ค่อยรู้เรื่องมากที่สุด แล้วเราดันเรียนสายเทคด้วยก็เลยคิดว่าวิชานี้นี่แหละค่ะ เป็นจุดเริ่มต้นของโปรเจค flowa ของเราค่ะ เหมือนเปิดโอกาสให้เราได้ไปแก้ไขจุดที่เราคิดว่า ถ้าย้อนกลับไปได้ก็คงอยากให้มีสิ่งนี้เกิดขึ้นมาค่ะ",
      },
      {
        id: 2,
        timestamp: 49,
        question: question[1],
        videoUrl: "https://www.youtube.com/watch?v=kIJhvPj5IC4",
        answer:
          "ต้องบอกก่อนว่าตอนแรกอยากทำเป็นเว็บไซต์ค่ะ ถ้าให้เรียกก็คงอารมณ์แบบ E-Learning ซึ่งพอเคาะมาเรื่อย ๆ แล้วสิ่งที่ขาดไปก็คงเป็นความสนุก ใช้เวลาคิดอยู่นานพอสมควรเลยค่ะ ก็เลยค่อย ๆ ลองตกผลึกความคิดออกมาว่า ถ้าทำเป็นเกม ก็คงมีความสนุกเพิ่มขึ้น มีกราฟิกสวย ๆ ให้ดูมีอะไรมากกว่าการเปิดหนังสือเรียนอะไรแบบนี้ค่ะ",
      },
      {
        id: 3,
        timestamp: 75,
        question: question[4],
        videoUrl: "https://www.youtube.com/watch?v=kIJhvPj5IC4",
        answer:
          "สกิลที่ควรมีหรอคะ ถ้าเป็นในส่วนของ soft skill ก็คงเป็นในเรื่องของการแก้ปัญหากับความคิดสร้างสรรค์ค่ะ เพราะตอนที่ทำก็ติดปัญหาเยอะมาก ไม่ว่าจะเป็นภาษาที่ใช้เขียน เราจะทำยังไงให้มันสามารถเล่นได้หลาย ๆ คน แต่ในส่วนของความคิดสร้างสรรค์ก็คือ ตอนนั้นต้องพยายามคิดนอกกรอบให้มาก ๆ ค่ะ เพราะถ้าคิดจะทำเกมแล้ว เราต้องดูว่ารูปแบบการเล่นเป็นยังไง แล้วต้องทำยังไงให้คนเล่นรู้สึกสนุกด้วย เนื่องจากคนเล่นเป็นเด็กนักเรียนด้วยค่ะ",
      },
      {
        id: 4,
        timestamp: 127,
        question: question[5],
        videoUrl: "https://www.youtube.com/watch?v=kIJhvPj5IC4",
        answer:
          "เวลาต้องการฮีลใจจะหาวันออกไปเที่ยวสักวันนึงค่ะ หรือถ้ายังไม่มีเวลาไปเที่ยวจริงจัง ก็อาจจะไปหาอะไรกินที่กินแบบเต็มที่ไปเลยค่ะ แล้วเราจะรู้สึกดีขึ้น หรือบางทีก็แค่ได้อยู่กับเพื่อนมันก็จะรู้สึกว่าเราไม่ได้โดดเดี่ยวค่ะ เพื่อนก็เหมือนเรา ยิ่งเราเชียร์อัพกัน มันก็ยิ่งเพิ่มพลังใจให้สามารถทำงานต่อไปได้ค่ะ",
      },
    ],
  },
  {
    id: 10,
    type: type[2],
    title: "Plantix",
    creator: "Kajbundit Kundee",
    creatorTh: "กาจบัณฑิต กันดี",
    nickName: "Nack",
    nickNameTh: "แน็ก",
    studentId: "236",
    thesisTh:
      "การออกแบบและพัฒนาระบบดูแลฟาร์มผักอัตโนมัติกรณีศึกษา ฟาร์มคุณปราโมทย์ ต.หนองปรือ อ.หนองปรือ จ.กาญจนบุรี",
    thesis:
      "The Design and Development of an Automated Vegetable Farm Management System: A Case Study of Pramot's Farm, Nong Prue Subdistrict, Nong Prue District, Kanchanaburi Province",
    logoUrl: `${imageUrl}/${logoUrl}/236/nack_logo.png`,
    category: "Working Adults",
    advisor: `${advisor[6]}`,
    scopeTh:
      "เป็นการออกแบบและพัฒนาระบบนี้ได้ใช้ฟังก์ชันหลัก เช่น การควบคุมการรดน้ำอัตโนมัติ, การแจ้งเตือนให้กับเกษตรกรเมื่อถึงเวลาหรือเมื่อเกิดปัญหาในฟาร์ม และการรวบรวมข้อมูลเกี่ยวกับสภาพแวดล้อมที่สามารถวิเคราะห์และช่วยให้เกษตรกรสามารถปรับปรุงการจัดการฟาร์มได้ กรณีศึกษาของการพัฒนาระบบนี้เกิดขึ้นที่ฟาร์มคุณปราโมทย์ ต.หนองปรือ อ.หนองปรือ จ.กาญจนบุรี ซึ่งมีเป้าหมายเพื่อเพิ่มประสิทธิภาพในการจัดการฟาร์มผักในพื้นที่ต่างๆ ที่เกษตรกรสามารถใช้ระบบนี้ในการดูแลฟาร์มของตนได้ง่ายขึ้นและสะดวกสบายมากขึ้น ทั้งนี้ ระบบนี้ช่วยลดภาระการดูแลฟาร์มและช่วยให้เกษตรกรสามารถควบคุมฟาร์มได้แม้ไม่อยู่ในพื้นที่โดยตรง",
    scope:
      "This system was designed and developed with core functionalities such as automatic irrigation control, notifications for farmers when scheduled tasks are due or when problems occur on the farm, and the collection of environmental data that can be analyzed to help farmers improve farm management. The case study for this system's development took place at Mr. Pramote's farm, located in Nong Prue Subdistrict, Nong Prue District, Kanchanaburi Province. The goal was to enhance the efficiency of vegetable farm management across various areas, enabling farmers to manage their farms more easily and conveniently using this system. Moreover, the system reduces the burden of farm supervision and allows farmers to monitor and control their farms even when they are not physically present.",
    ideaConceptTh:
      "ในกรณีศึกษาของฟาร์มคุณปราโมทย์ ตำบลหนองปรือ อำเภอหนองปรือ จังหวัดกาญจนบุรี ซึ่งเป็นฟาร์มผักที่ประสบปัญหาในการจัดการน้ำและความชื้นในดิน เนื่องจากสภาพอากาศที่ร้อนเกือบจะตลอดทั้งปี ทำให้ผลผลิตลดลงและเกษตรกรต้องใช้ทรัพยากรจำนวนมากเพื่อจัดการฟาร์ม ปัญหาดังกล่าวนำไปสู่แนวคิดในการพัฒนาระบบดูแลฟาร์มผักอัตโนมัติ ซึ่งเป็นระบบที่สามารถควบคุมและตรวจสอบสภาพแวดล้อมของฟาร์มได้อย่างมีประสิทธิภาพ โดยใช้เทคโนโลยี IoT เพื่อช่วยให้เกษตรกรสามารถจัดการฟาร์มได้สะดวกยิ่งขึ้น ลดต้นทุน และช่วยเพิ่มผลผลิตได้มากขึ้น",
    ideaConcept:
      "In the case study of Mr. Pramote's vegetable farm, located in Nong Prue Subdistrict, Nong Prue District, Kanchanaburi Province, the farm faced challenges in managing water and soil moisture due to the persistently hot climate throughout the year. These conditions led to a decline in crop yields and forced the farmer to use significant resources to maintain the farm. This issue prompted the development of an automated vegetable farm management system, designed to efficiently monitor and control the farm's environmental conditions. The system utilizes Internet of Things (IoT) technology to help farmers manage their farms more conveniently, reduce operational costs, and increase productivity.",
    codingLanguage: ["Dart", "C/C++", "Javascript"],
    databaseSystem: ["Firebase"],
    codingTool: ["Android Studio", "Arduino IDE", "Visual Studio Code"],
    designTool: ["Figma", "Adobe illustrator", "Adobe Photoshop"],
    targetGroup:
      "Vegetable farmers age 30–50 in Nong Prue Subdistrict, Kanchanaburi, who are open to adopting IoT technology to improve productivity and farm management.",
    targetGroupTh:
      "เกษตรกรผู้ปลูกผัก อายุ 30–50 ปี  ในตำบลหนองปรือ จังหวัดกาญจนบุรี ที่มีความพร้อมในการปรับตัวใช้เทคโนโลยี IoT เพื่อเพิ่มผลผลิตและพัฒนาการจัดการฟาร์ม",
    comments: [
      "การเชื่อมต่ออุปกรณ์ค่อนข้างซับซ้อน หากสามารถออกแบบให้เชื่อมต่อง่ายขึ้น จะช่วยให้ผู้ใช้งานสะดวกมากขึ้น",
      `กราฟแสดงผลยังไม่ชัดเจน ควรมีการระบุหรือแสดงผลเพิ่มเติมว่าค่าที่แสดงอยู่นั้นอยู่ในระดับ "ดี" หรือ "ไม่ดี" เพื่อให้เข้าใจง่าย`,
      "การเปิด-ปิดน้ำอัตโนมัติช่วยลดภาระงานลงได้จริง แต่ยังต้องมีการตรวจสอบเพิ่มเติมในบางสถานการณ์",
    ],
    functions: [
      {
        id: 1,
        title_en: "Environmental monitoring system",
        title_th: "ระบบตรวจสอบสภาพแวดล้อม",
      },
      {
        id: 2,
        title_en: "Automatic water on/off system",
        title_th: "เปิดน้ำ/ปิดอัตโนมัติ",
      },
      {
        id: 3,
        title_en: "Notifications and historical data viewing",
        title_th: "แจ้งเตือนและดูข้อมูลย้อนหลัง",
      },
    ],
    projectInfoImageUrl: [
      `${imageUrl}/${projectInfoUrl}/236/nack_01.png`,
      `${imageUrl}/${projectInfoUrl}/236/nack_02.png`,
      `${imageUrl}/${projectInfoUrl}/236/nack_03.png`,
    ],
    testImageUrl: [
      `${imageUrl}/${testUrl}/236/nack_01.png`,
      `${imageUrl}/${testUrl}/236/nack_02.png`,
      `${imageUrl}/${testUrl}/236/nack_03.png`,
      `${imageUrl}/${testUrl}/236/nack_04.png`,
    ],
    keyFunctionImageUrl: `${imageUrl}/${keyFunctionUrl}/236/nack_01.png`,
    mainProfile: `${imageUrl}/${profileUrl}/236/Nack_mainProfile.JPG`,
    subProfile: `${imageUrl}/${profileUrl}/236/Nack_subProfile.JPG`,
    screenShots: [
      `${imageUrl}/${screenshotsUrl}/236/nack_01.png`,
      `${imageUrl}/${screenshotsUrl}/236/nack_02.png`,
      `${imageUrl}/${screenshotsUrl}/236/nack_03.png`,
      `${imageUrl}/${screenshotsUrl}/236/nack_04.png`,
      `${imageUrl}/${screenshotsUrl}/236/nack_05.png`,
    ],
    designTestScore: "3.38",
    usefulTestScore: "3.44",
    titleInfographic: "แปลงเกษตรธรรมดา สู่ฟาร์มอัจฉริยะ",
    infographicUrl: `${imageUrl}/${infographicUrl}/236/nack_infographic.png`,
    descriptionInfographic:
      "คือการนำเทคโนโลยี เช่น เซ็นเซอร์, ระบบควบคุมอัตโนมัติ, AI  มาใช้แทนแรงงานคนในการวัด วิเคราะห์ และจัดการแปลงเกษตรแบบแม่นยำ ช่วยให้เกษตรกรประหยัดน้ำ ปุ๋ย และแรงงาน พร้อมเพิ่มผลผลิตและลดความเสี่ยงจากสภาพแวดล้อมหรือโรคพืช ทั้งยังสามารถควบคุมฟาร์มได้ผ่านมือถือ แม้จะอยู่นอกพื้นที่",
    quote: "อย่าตัดโอกาสตัวเอง ด้วยคำว่าทำไม่เป็น",
    email: "kajbandit78@gmail.com",
    linkedIn: "https://www.linkedin.com/in/kajbandit-kundee/",
    afterExhibited:
      "ตลอดระยะเวลากว่า 6 เดือนที่ผ่านมาได้ ทุ่มเทแรงกาย แรงใจ และเวลาไปกับการทำโปรเจกต์นี้อย่างเต็มที่ ทุกขั้นตอนเต็มไปด้วยการลองผิดลองถูก การแก้ไข พัฒนา และเติบโตไปพร้อมกัน นี่เป็นครั้งแรกที่ต้องรับผิดชอบหลายอย่างพร้อมกัน ทั้งตื่นเต้น กดดัน แต่ก็สนุกมาก เพราะได้เรียนรู้ทักษะใหม่ ๆ และที่สำคัญคือ ได้เห็นผลงานของตัวเองเป็นรูปเป็นร่าง มันคือความภูมิใจที่บอกไม่ถูกเลยครับ",
    ToolRecommended: [
      { id: 1, tool: tools[1] },
      {
        id: 2,
        tool: tools[3],
      },
      {
        id: 3,
        tool: tools[0],
      },
    ],
    interviewCover: `${imageUrl}/${insightCover}/interview_236.png`,
    interview: [
      {
        id: 1,
        timestamp: 13,
        question: question[0],
        videoUrl: "https://www.youtube.com/watch?v=sCYFhM9xXVA",
        answer:
          "จุดเริ่มต้นของโปรเจคนี้เกิดจากความสนใจของผมในการนำเทคโนโลยีมาใช้แก้ปัญหาที่เกิดขึ้นจริงในชีวิตประจำวัน โดยเฉพาะในภาคเกษตร เพราะผมสังเกตว่าหลายฟาร์มยังต้องพึ่งพาการทำงานแบบเดิม ๆ เช่น การรดน้ำเองทุกวัน ขาดคนช่วยดูแล หรือไม่มีข้อมูลที่เพียงพอในการดูแล ผมเลยเริ่มคิดว่า ถ้ามีระบบที่สามารถดูแลแปลงผักได้แบบอัตโนมัติ ไม่ต้องเฝ้าตลอดเวลา มันจะช่วยลดภาระของเกษตรกร และยังช่วยเพิ่มคุณภาพของผลผลิตในระยะยาวด้วยครับ",
      },
      {
        id: 2,
        timestamp: 61,
        question: question[1],
        videoUrl: "https://www.youtube.com/watch?v=sCYFhM9xXVA",
        answer:
          "ไอเดียแรกของผมจริง ๆ เริ่มจากเรื่องการป้องกันออฟฟิศซินโดรม เพราะช่วงที่นั่งทำงานหน้าคอมนาน ๆ หลายคนเริ่มมีอาการปวดหลัง ปวดคอ ผมก็เลยตั้งคำถามว่า “จะมีเทคโนโลยีอะไรบ้าง ที่ช่วยดูแลสุขภาพคนทำงานออฟฟิศได้บ้าง?” ตอนนั้นผมวางแผนจะทำแอปจับเวลาให้พักสายตา หรือแจ้งเตือนให้ออกกำลังกายเบา ๆ ระหว่างวัน แต่หลังจากรีเสิร์ชเพิ่มเติม ผมก็พบว่าโจทย์นี้ค่อนข้างกว้าง และมีแอปแนวนี้อยู่ในตลาดค่อนข้างเยอะแล้ว อีกทั้งหลายออฟฟิศเองก็มีฟิตเนส หรือกิจกรรมส่งเสริมสุขภาพให้พนักงานอยู่แล้ว ผมจึงได้ปรึกษาอาจารย์ที่ปรึกษา อาจารย์ที่ปรึกษาเลยเริ่มมองหาโจทย์ใหม่ที่ ใกล้ตัวผม จนได้มาพบกับปัญหาของเกษตรกร ที่ต้องดูแลแปลงผักด้วยตัวเองทุกวัน ผมจึงตัดสินใจเปลี่ยนแนวทาง มาโฟกัสที่การใช้ IoT กับภาคเกษตร เพื่อช่วยลดภาระของเกษตรกร และทำให้การดูแลฟาร์มสามารถทำได้อัตโนมัติมากขึ้นครับ",
      },
      {
        id: 3,
        timestamp: 99,
        question: question[3],
        videoUrl: "https://www.youtube.com/watch?v=sCYFhM9xXVA",
        answer:
          "ถ้ามีเวลาเพิ่ม สิ่งที่ผมอยากพัฒนาต่อคือ การแสดงผลข้อมูลให้อ่านง่ายขึ้น โดยเฉพาะในรูปแบบกราฟ เพราะเกษตรกรหลายคนอาจจะไม่ได้คุ้นเคยกับตัวเลขหรือข้อมูลเชิงเทคนิคมากนัก การทำให้กราฟดูเข้าใจง่าย ชัดเจน จะช่วยให้เขาใช้งานระบบได้สะดวกขึ้นอีกอย่างที่อยากปรับคือเรื่องการ เชื่อมต่อกับอุปกรณ์ อยากให้ผู้ใช้ทั่วไปสามารถเพิ่มหรือลดจำนวนเซนเซอร์เองได้ โดยไม่ต้องมีความรู้เทคนิคหรือเรียกช่าง เป้าหมายคืออยากให้ระบบนี้เข้าถึงง่าย ใช้งานได้จริงในชีวิตประจำวันครับ",
      },
      {
        id: 4,
        timestamp: 124,
        question: question[5],
        videoUrl: "https://www.youtube.com/watch?v=sCYFhM9xXVA",
        answer:
          "บางครั้งแค่ได้ออกห่างจากหน้าจอซัก 15–20 นาที ก็ทำให้สมองโล่งขึ้นเยอะ อีกวิธีที่ช่วยมากคือการคุยเล่นกับเพื่อน ไม่ใช่แค่เรื่องโปรเจค แต่เรื่องทั่วไปที่ทำให้หัวเราะได้บ้าง มันช่วยให้เราไม่รู้สึกว่าอยู่กับปัญหาคนเดียวครับ",
      },
    ],
  },
  {
    id: 11,
    type: type[1],
    title: "ThaiDam Vibe",
    creator: "Hatthakarn Janchavee",
    creatorTh: "หัตถกาญจน์ จันทร์ฉวี",
    nickName: "Man",
    nickNameTh: "แมน",
    studentId: "137",
    thesisTh:
      "การออกแบบและพัฒนาเว็บแอปพลิเคชันในเชิงสื่อการเรียนรู้เกี่ยวกับชาติพันธุ์ไทยทรงดำและชาติพันธุ์พื้นถิ่นเพื่ออนุรักษ์และส่งเสริมการท่องเที่ยวกรณีศึกษาในเขต อำเภอเขาย้อย จังหวัดเพชรบุรี",
    thesis:
      "Web Application Design and Development In Terms of Learning Media About the Thai Songdam Ethnicity and Local Ethnic Groups to Preserve and Promote Tourism Case Study in Khao Yoi District, Phetchaburi Province",
    logoUrl: `${imageUrl}/${logoUrl}/137/man_logo.png`,
    category: "Working Adults",
    advisor: `${advisor[3]}`,
    scopeTh:
      "ไทยดำ ไวบ์ เป็นการออกแบบและพัฒนา เว็บแอปพลิเคชันเชิงสื่อการเรียนรู้ ที่เน้นการให้ข้อมูลและสร้างประสบการณ์เชิงวัฒนธรรมเกี่ยวกับ ชาติพันธุ์ไทยทรงดำ และ ชาติพันธุ์พื้นถิ่น ในเขตอำเภอเขาย้อย จังหวัดเพชรบุรี โดยมีเป้าหมายหลักคือการอนุรักษ์วัฒนธรรมท้องถิ่นและส่งเสริมการท่องเที่ยวเชิงวัฒนธรรม ผ่านการนำเสนอข้อมูลทางวัฒนธรรม ประวัติศาสตร์ และกิจกรรมท่องเที่ยวในพื้นที่อำเภอเขาย้อย จังหวัดเพชรบุรี",
    scope:
      "Thai Dam Vibe is a web application design and development for learning media that focuses on providing information and creating cultural experiences about the Thai Song Dam ethnic group and local ethnic groups in Khao Yoi District, Phetchaburi Province. The main goal is to preserve local culture and promote cultural tourism through the presentation of cultural information, history, and tourism activities in Khao Yoi District, Phetchaburi Province.",
    ideaConceptTh:
      "กลุ่มชาติพันธุ์ไทยทรงดำในอำเภอเขาย้อย จังหวัดเพชรบุรี มีวัฒนธรรมที่งดงามและทรงคุณค่า ทว่าวิถีดั้งเดิมเหล่านี้กำลังถูกกลืนหายไปกับการเปลี่ยนแปลงของสังคมยุคใหม่ แม้เทคโนโลยีจะเข้ามามีบทบาทในชีวิตประจำวัน แต่ยังขาดสื่อดิจิทัลที่นำเสนอวัฒนธรรมท้องถิ่นอย่างลึกซึ้งและเข้าถึงง่าย ทำให้ความรู้เกี่ยวกับไทยทรงดำยังไม่ถูกถ่ายทอดอย่างกว้างขวางและน่าสนใจเท่าที่ควร การพัฒนาเว็บแอปพลิเคชันเพื่อส่งเสริมการเรียนรู้และการท่องเที่ยวเชิงวัฒนธรรมจึงเป็นแนวทางที่ตอบโจทย์ ทั้งช่วยอนุรักษ์อัตลักษณ์ชาติพันธุ์ และยกระดับเศรษฐกิจชุมชนได้อย่างยั่งยืน โดยเฉพาะในกลุ่มเยาวชนและคนรุ่นใหม่ที่คุ้นเคยกับโลกดิจิทัล",
    ideaConcept:
      "The Thai Song Dam ethnic group in Khao Yoi District, Phetchaburi Province has a beautiful and valuable culture. However, these traditional ways are being swallowed up by the changes in modern society. Although technology plays a role in daily life, there is still a lack of digital media that presents local culture in depth and is easily accessible. As a result, knowledge about the Thai Song Dam has not been widely and interestingly conveyed. Developing a web application to promote learning and cultural tourism is an approach that meets the requirements, both helping to preserve ethnic identity and sustainably elevating the community economy, especially among youth and the new generation who are familiar with the digital world.",
    codingLanguage: ["PHP", "HTML", "CSS", "JavaScript"],
    databaseSystem: ["MySQL"],
    codingTool: ["Visual Studio Code"],
    designTool: ["Figma", "Adobe illustrator", "Adobe Photoshop"],
    targetGroup:
      "Generation Z tourists, students, and the Thai Song Dam and local ethnic communities",
    targetGroupTh:
      "นักท่องเที่ยว Generation Z  นักศึกษา และชุมชนชาวไทยทรงดำและชาติพันธุ์พื้นถิ่น",
    comments: [
      "ตอนทดสอบยังไม่สามารถแก้ไข ข้อมูลของกิจกรรมในส่วนแอดมิน หลังบ้านแล้วข้อมูลไม่เปลี่ยนสำหรับฝั่งของหน้าเว็บซึ่งได้รับการแก้ไขแล้ว",
      "ตัวหนังสืออาจดูเยอะไปนิดหน่อย แต่ดูโดยรวมแล้วมีความเป็นทางการ",
      "มีความง่ายต่อการใช้งาน และตรงจุดประสงค์ดี",
    ],
    functions: [
      { id: 1, title_en: "Activity Booking", title_th: "การจองการทำกิจกรรม" },
      {
        id: 2,
        title_en: "Activity Management for Back Office Admin",
        title_th: "การจัดการกิจกรรมสำหรับแอดมินหลังบ้าน",
      },
      {
        id: 3,
        title_en: "Activity Booking Management for Back Office Admin",
        title_th: "การจัดการ การจองกิจกรรมสำหรับแอดมินหลังบ้าน",
      },
    ],
    projectInfoImageUrl: [
      `${imageUrl}/${projectInfoUrl}/137/man_01.png`,
      `${imageUrl}/${projectInfoUrl}/137/man_02.png`,
      `${imageUrl}/${projectInfoUrl}/137/man_03.png`,
    ],
    testImageUrl: [
      `${imageUrl}/${testUrl}/137/man_01.png`,
      `${imageUrl}/${testUrl}/137/man_02.png`,
      `${imageUrl}/${testUrl}/137/man_03.png`,
      `${imageUrl}/${testUrl}/137/man_04.png`,
    ],
    keyFunctionImageUrl: `${imageUrl}/${keyFunctionUrl}/137/man_01.png`,
    mainProfile: `${imageUrl}/${profileUrl}/137/Man_mainProfile.JPG`,
    subProfile: `${imageUrl}/${profileUrl}/137/Man_subProfile.JPG`,
    screenShots: [
      `${imageUrl}/${screenshotsUrl}/137/man_01.png`,
      `${imageUrl}/${screenshotsUrl}/137/man_02.png`,
      `${imageUrl}/${screenshotsUrl}/137/man_03.png`,
      `${imageUrl}/${screenshotsUrl}/137/man_04.png`,
      `${imageUrl}/${screenshotsUrl}/137/man_05.png`,
    ],
    designTestScore: "4.50",
    usefulTestScore: "4.20",
    titleInfographic: "THAIDAM VIBE สัมผัสวิถีไทยทรงดำผ่านเว็บแอปเดียว",
    infographicUrl: `${imageUrl}/${infographicUrl}/137/man_infographic.png`,
    descriptionInfographic:
      "THAIDAM VIBE คือ Web Application ที่พาคุณไปรู้จัก “ชาวไทยทรงดำ” อย่างลึกซึ้ง ผ่านการเรียนรู้วัฒนธรรม วิถีชีวิต ภาษา อาหาร และกิจกรรมเชิงสร้างสรรค์ในรูปแบบดิจิทัล ที่เหมาะสำหรับนักท่องเที่ยว นักเรียน นักศึกษา และผู้สนใจวัฒนธรรมชาติพันธุ์ท้องถิ่นอย่างแท้จริง",
    quote: "เส้นทางที่มันไม่เรียบ มันให้ประสบการณ์คุณเพียบแน่นอน",
    email: "hatthakarn.45@gmail.com",
    linkedIn: "www.linkedin.com/in/hatthakarn-janchavee",
    afterExhibited:
      "พอได้เห็นโปรเจคของตัวเองและเพื่อนๆที่มุ่งมั่นและตั้งใจทำมาตลอดทั้งเทอม จนสามารถนำออกมาเผยแพร่ได้แล้ว ผมรู้สึกโล่งใจ ดีใจและยินดีกับเพื่อนๆทุกคนที่ผ่านร้อนผ่านหนาวมาได้จนถึงทุกวันนี้ ผมขอขอบคุณทุกคนที่มีส่วนเกี่ยวข้องในการพัฒนาโปรเจคชิ้นนี้ให้ลุล่วงไปได้ด้วยดี ขอขอบคุณครับ",
    ToolRecommended: [
      { id: 1, tool: tools[1] },
      {
        id: 2,
        tool: tools[3],
      },
      {
        id: 3,
        tool: tools[0],
      },
    ],
    interviewCover: `${imageUrl}/${insightCover}/interview_137.png`,
    interview: [
      {
        id: 1,
        timestamp: 13,
        question: question[0],
        videoUrl: "https://www.youtube.com/watch?v=0iDCXbmjMEg",
        answer:
          "จุดเริ่มต้นของโปรเจคนี้คือ การนำสิ่งที่อยู่รอบๆ ภายในหมู่บ้านของผม ซึ่งมีชาวไทยทรงดำอาศัยอยู่เป็นจำนวนหนึ่ง โดยกลุ่มคนเหล่านี้เขาจะมีภาษาพูด ภาษาเขียน การแต่งกาย และวัฒนธรรมที่เป็นเอกลักษณ์ของเขา ซึ่งด้วยเหตุผมจึงเกิดไอเดียเชิงอนุรักษ์วัฒนธรรมแบบนี้ขึ้นมานั้นเองครับ",
      },
      {
        id: 2,
        timestamp: 43,
        question: question[1],
        videoUrl: "https://www.youtube.com/watch?v=0iDCXbmjMEg",
        answer:
          "จริงๆต้องบอว่ามีหลายหัวข้อมากๆที่อยู่ในหัวตอนนั้น แต่หัวข้อที่ได้ลองนำไปเสนอให้กับทางคณะอาจารย์เลยคือ หัวข้อที่เกี่ยวกับการใช้ศิลปะบำบัดวามเครียด ซึ่งตรงจุดนี้ผมรู้สึกว่ามัน Deep ไปจนผมนึกขึ้นได้ว่า สรุปแล้วเราอยากทำออกมาเพื่อบำบัดความเครียด แต่กลายเป็นว่าตัวผมในตอนนั้นกลับเครียดแทน จึงตักสินใจยุติการพัฒนาในหัวข้อนี้ครับ",
      },
      {
        id: 3,
        timestamp: 83,
        question: question[4],
        videoUrl: "https://www.youtube.com/watch?v=0iDCXbmjMEg",
        answer:
          "ถ้าให้เลือกสักหนึ่งสกิลที่ผมคิดว่าสำคัญมากในการทำโปรเจกต์ ผมขอเลือก ‘การทำงานเป็นระบบ’ ครับ เพราะในทุกโปรเจกต์ ไม่ว่าจะเล็กหรือใหญ่ ถ้าเราจัดการสิ่งต่าง ๆ ได้เป็นลำดับขั้น มองเห็นภาพรวม และวางแผนเป็นระบบ มันจะช่วยให้เราทำงานได้ราบรื่นขึ้นเยอะ ลดความผิดพลาด แล้วก็ทำให้ทีมสามารถทำงานร่วมกันได้ง่ายขึ้นด้วย  และผมเชื่อว่า ถ้าเรามีพื้นฐานการทำงานแบบเป็นระบบแล้ว ไม่ว่าจะเจอสถานการณ์แบบไหน เราก็จะรับมือได้อย่างมีประสิทธิภาพครับ",
      },
      {
        id: 4,
        timestamp: 109,
        question: question[5],
        videoUrl: "https://www.youtube.com/watch?v=0iDCXbmjMEg",
        answer: `เวลาที่รู้สึกเครียดหรือหมดไฟ ผมจะพยายามเบรกตัวเองออกจากสิ่งที่ทำอยู่สักพักครับ บางทีก็แค่ไปเดินเล่น ฟังเพลงเงียบ ๆ หรือหาเวลาคุยกับคนที่เราสบายใจด้วย แค่ไม่กี่นาทีก็ช่วยให้ใจเบาขึ้นเยอะ แล้วผมก็จะค่อย ๆ ทบทวนว่าเราทำสิ่งนี้ไปเพื่ออะไร ย้อนกลับไปหาความตั้งใจแรก มันเหมือนเป็นการเติมพลังให้ตัวเองอีกครั้งครับ ,ผมเชื่อว่า...บางครั้งแค่ยอมให้ตัวเองพัก ก็เป็นการฮีลใจที่ดีมากแล้วครับ`,
      },
    ],
  },
  {
    id: 12,
    type: type[1],
    title: "MakeMeSafe",
    creator: "Jiratchaya Nilsuay",
    creatorTh: "จิรัชยา นิลสวย",
    nickName: "Namtan",
    nickNameTh: "น้ำตาล",
    studentId: "131",
    thesisTh:
      "การออกแบบและพัฒนาเว็บแอปพลิเคชันเพื่อเป็นเครื่องมือที่ช่วยในการประเมินความเสี่ยงและป้องกันการบูลลี่ในโรงเรียนกรณีศึกษาเด็กอายุ 12-15 ปี",
    thesis:
      "Design and Developing Web Application Be a Tool to Help Assess the Risk and Prevent Bullying in Schools. Among 12-15 Year Old's",
    logoUrl: `${imageUrl}/${logoUrl}/131/namtan_logo.png`,
    category: "High School Students",
    advisor: `${advisor[1]}`,
    scopeTh:
      "พัฒนาเว็บแอปพลิเคชัน เพื่อเป็นเครื่องมือที่ช่วยในการประเมินความเสี่ยงและป้องกันการบูลลี่ในโรงเรียน กรณีศึกษาเด็กอายุ 12-15 ปีเพื่อให้นักเรียนได้เข้ามาทดสอบเพื่อประเมินความเสี่ยง และมีระบบหลังบ้านสำหรับให้คุณครูได้ดูข้อมูลการวัดผล สรุปผลข้อมูลทั้งหมดภายในชั้นเรียน เพื่อนำข้อมูลไปช่วยลดความเสี่ยงในการบูลลี่ภายในโรงเรียน",
    scope:
      "Develop a web application as a tool to help assess the risk and prevent bullying in schools. A case study of children aged 12-15 years old to allow students to take a test to assess the risk. There is a back-end system for teachers to view measurement data, summarize all data within the classroom, to use the data to help reduce the risk of bullying in schools.",
    ideaConceptTh:
      "การประเมินระดับความเสี่ยงจากเครื่องมือนี้ เพื่อให้คุณครูในสถานศึกษาได้ดูผลการประเมินและนำไปซึ่งการลดความเสี่ยงการโดนบูลลี่ได้ภายในอนาคต เนื่องจากเด็กในวัยมัธยมต้น ขาดเครื่องมือที่ช่วยในการวัดระดับความเสี่ยงหรือยากต่อการประเมินความเสี่ยงของตัวเองเกี่ยวกับการถูกรังแกในโรงเรียน",
    ideaConcept:
      "The risk assessment from this tool allows teachers in educational institutions to see the assessment results and lead to reducing the risk of bullying in the future. Because children in middle school lack tools to help measure the risk level or find it difficult to assess their own risk of being bullied in school.",
    codingLanguage: ["PHP", "HTML", "CSS", "JavaScript"],
    databaseSystem: ["MySQL"],
    codingTool: ["Visual Studio Code"],
    designTool: ["Figma", "Adobe Illustrator", "Photoshop"],
    targetGroup:
      "Group of students in grades 1-3, age 12-15 years and group of teachers or professors, age 22 - 45 years",
    targetGroupTh:
      "กลุ่มนักเรียนม. 1-3 อายุ 12-15 ปี และกลุ่มอาจารย์ หรือ คุณครู อายุ 22 - 45 ปี",
    comments: [
      "อยากใหั้มีการอัปเดตคำถาม 2-3 เดือนครั้งนึง เพื่อไม่สร้างความน่าเบื่อ และเพื่อให้ได้ข้อมูลการทดสอบที่หลากหลาย",
      "ระบบหลังบ้านของคุณครู อยากให้มีการสรุปผลได้เยอะกว่านีั เห็นอย่างครอบคลุม",
      "ระบบการยืนยันตัวตนสำหรับอาจจะต้องมีเพิ่มเข้ามา และ การสมัครสมาชิกก็อาจจะต้องปรับปรุงให้ดีขึ้น",
    ],
    functions: [
      {
        id: 1,
        title_en: "Survey (Student Test)",
        title_th:
          "การสำรวจพฤติกรรมนักเรียนด้วยการตอบแบบสอบถามโดยมีข้อคำถามจากวิจัยที่น่าเชื่อถือ เพื่อใช้ในการวัดผลระดับความเสี่ยงทั้งหมด 4 ระดับ",
      },
      {
        id: 2,
        title_en: "Addmin (Techer)",
        title_th:
          "สามารถที่จะเพิ่มข้อมูลของนักเรียนในโครงการได้ และ สามารถที่จะดูสรุปผลข้อมูลทั้งหมดและรายบุคคลของเด็กในชั้นเรียนได้",
      },
      {
        id: 3,
        title_en: "Super Admin (Developer)",
        title_th:
          "สามารถดูข้อมูลระบบเกี่ยยวกับ ผู้ใช้งานฝั่งคุณครูได้ หรือ มีการแก้ไขข้อมูลในกับ ผู้ใช้ได้ รวมถึงปรับระดับสมาชิก และสร้าง Code สำหรับการ Invite เข้าระบบหลังบ้าน",
      },
    ],
    projectInfoImageUrl: [
      `${imageUrl}/${projectInfoUrl}/131/namtan_01.png`,
      `${imageUrl}/${projectInfoUrl}/131/namtan_02.png`,
      `${imageUrl}/${projectInfoUrl}/131/namtan_03.png`,
    ],
    testImageUrl: [
      `${imageUrl}/${testUrl}/131/namtan_01.png`,
      `${imageUrl}/${testUrl}/131/namtan_02.png`,
      `${imageUrl}/${testUrl}/131/namtan_03.png`,
      `${imageUrl}/${testUrl}/131/namtan_04.png`,
    ],
    keyFunctionImageUrl: `${imageUrl}/${keyFunctionUrl}/131/namtan_01.png`,
    mainProfile: `${imageUrl}/${profileUrl}/131/Namtan_mainProfile.JPG`,
    subProfile: `${imageUrl}/${profileUrl}/131/Namtan_subProfile.JPG`,
    screenShots: [
      `${imageUrl}/${screenshotsUrl}/131/namtan_01.png`,
      `${imageUrl}/${screenshotsUrl}/131/namtan_02.png`,
      `${imageUrl}/${screenshotsUrl}/131/namtan_03.png`,
      `${imageUrl}/${screenshotsUrl}/131/namtan_04.png`,
      `${imageUrl}/${screenshotsUrl}/131/namtan_05.png`,
    ],
    designTestScore: "4.30",
    usefulTestScore: "4.50",
    titleInfographic: "บูลลี่ไม่ใช่เรื่อง เด็กๆ",
    infographicUrl: `${imageUrl}/${infographicUrl}/131/namtan_infographic.png`,
    descriptionInfographic:
      "สถิติเด็กไทยส่วนใหญ่โดนบูลลี่คิดเป็นร้อยละ80 ดังนั้น เราไม่ควรเห็นเรื่องนี้เป็นแค่เรื่อง เด็กๆ หรือเรื่องเล็กสำหรับทุกคน ตัวเลขบ่งชี้ว่าส่วนใหญ่มักจะเกิดการบูลลี่กันในช่วง ม.1-3 ดังนั้นมาหาแนวทางการรับมือและป้องกัน เพื่ออนาคตที่ไม่มีการบูลลี่กันเถอะ",
    quote: "ไม่ต้องโค้ดให้เก่งเหมือนใครเขา แค่เข้าใจที่เราพอทำไหว",
    email: "ninsuay.nt@gmail.com",
    linkedIn: "https://www.linkedin.com/in/jiratchaya-ninsuay/",
    afterExhibited:
      "ภูมิใจในผลงานของตัวเองและเพื่อน ๆ เพราะว่าเราทำงงานตรงนี้กันมาเทอมนึง หรือประมาณ 6 เดือนกว่าๆ และก็มีการแก้ไขพัฒนาให้ดีขึ้น และอยากให้ผลงานเป็นที่รู้จักกับคนที่สนใจหรือพอเป็นแนวทางให้น้องๆ หรือคนอื่นได้",
    ToolRecommended: [
      { id: 1, tool: tools[1] },
      {
        id: 2,
        tool: tools[2],
      },
      {
        id: 3,
        tool: tools[4],
      },
    ],
    interviewCover: `${imageUrl}/${insightCover}/interview_131.png`,
    interview: [
      {
        id: 1,
        timestamp: 12,
        question: question[0],
        videoUrl: "https://www.youtube.com/watch?v=qzs8D93LLic",
        answer:
          "ส่วนตัว คิดว่า การบูลลี่จริงๆแล้วมันอยู่ในสังคมเรามานานมากแล้วค่ะ ไม่ว่าจะช่วงอายุไหน มอต้น มอปลาย หรือจะเป็นช่วงมหาลัย ก็อาจจะเกิดขึ้นได้กับทุกคน และมันก็ยังเป็นปัญหาที่อาจจะยังไม่ได้รับการแก้ไขให้ดีขึ้นค่ะ แต่จากการค้นหาก็พบว่าสถิติเด็กไทยส่วนใหญ่ที่โดนบูลลี่มัดจะอยู่ช่วงมอต้น ซึ่งส่วนตัวเราก็คิดว่าบางทีถ้าเราโดนบูลลี่มาตั้งแต่เด็กมันอาจจะส่งผลเสียในอนาคตตอนที่เราโตขึ้นได้ เราก็เลยคิดว่าทุกการเติบโตในแต่ละช่วงชีวิตของทุกคนก็ควรจะมีความทรงจำที่ดีไม่ควรมีความทรงจำที่แย่ ซึ่งในโลกยุคปัจจุบัน เด็กส่วนใหญ่ก็ใช้ชีวิตอยู่ในรั้วโรงเรียนมากกว่าอยู่ที่บ้าน เราเลยเห็นปัญหานี้เป็นปัญหาใหญ่ เราก็เลยหยิบปัญหานี้ขึ้นมาเพื่อมาทำโปรเจคค่ะ อีกอย่างสื่อต่างๆบนโซเชียลมีเดียก็มีข่าวออกมาให้เห็นเยอะแยะ ก็เลยทำให้เรารู้สึกว่าเราควรจะปลูกฝังให้เขาตั้งแต่อายุยังน้อย หรือเป็นการลดความเสี่ยงที่จะเกิดขึ้น เพื่อให้เขาเติบโตขึ้นมาโดยที่ไม่มีปมในใจ เพราะว่าในสมัยนี้ไม่ควรมีใครโดนบูลลี่แล้วค่ะ ไม่ว่าจะอายุไหนก็ตาม",
      },
      {
        id: 2,
        timestamp: 75,
        question: question[1],
        videoUrl: "https://www.youtube.com/watch?v=qzs8D93LLic",
        answer:
          "ไอเดียแรกเลยก็คือ อาร์ตทอยค่ะ คิดไว้ว่าจะสร้างเว็บไซต์ที่ให้ทุกคนมามาสร้างอาร์ตทอยเป็นของตัวเองได้ค่ะ แต่ด้วยความสามารถหรือ ปัจจัยอื่นๆ ทำให้รู้สึกว่ามันยากเกินไป อีกอย่างปัญหาตรงนี้มันอาจจะไม่ได้เป็นปัญหาใหญ่มากค่ะ คือตอนแรกคิดว่าจะดีกว่าไหม ถ้าแบบ เราไม่ต้องซื้ออาร์ตทอยราคารีเชลแต่ว่าเราสร้างมันขึ้นมาเองเลย โดยความคิดสร้างสรรค์หรือไอเดียของเราเอง ซึ่งมันก็อาจจะตอบโจทย์แค่บางคนเท่านั้น  เพราะว่าอาร์ตทอยเขาก็มาตามกระแสตลาด แล้วก็ผ่านไป ราคามันก็มีขึ้นๆลงๆอยู่แล้ว เราไม่สามารถไปควบคุมราคาตลาดได้ ก็เลยล้มเลิกความคิดตรงนี้ไปค่ะ",
      },
      {
        id: 3,
        timestamp: 121,
        question: question[2],
        videoUrl: "https://www.youtube.com/watch?v=qzs8D93LLic",
        answer:
          "ความน่าเบื่อถือของตัวคำถามที่เราเอามาวัดผลตรงนี้เพื่อประเมินความเสี่ยงในการโดนบูลลี่ค่ะ เพราะมันอาจจะเป็นคำถามที่อาจจะทำให้เรารู้สึกไม่ดีได้ หรือ เด็กบางคนก็ไม่อยากตอบ แล้วถ้าเราคิดมาเองโดยตรง ไม่มีข้อมูลอ้างอิงหรือรับรอง มันก็อาจจะไม่สามารถสร้างความน่าเชื่อถือ หรือ ไม่มีน้ำหนักเพียงพอที่จะเอามาใช้ในงานของเราค่ะ",
      },
      {
        id: 4,
        timestamp: 184,
        question: question[5],
        videoUrl: "https://www.youtube.com/watch?v=qzs8D93LLic",
        answer:
          "ถ้าพูดถึงวิธีการให้กำลังใจตัวเองสิ่งแรกที่จะเลือกทำคือการไปกินชาบูหรือว่าเลือกทานอาหารอร่อยอร่อยเพราะเราสามารถฟื้นฟูร่างกายตัวเองได้ด้วยการกินอิ่มนอนหลับนี่เรียกว่าการพักผ่อนที่ถูกต้องที่สุดแล้วค่ะ ส่วนวิธีเพิ่มพลังในวันที่หมดไฟ ก็อาจจะเป็นการพูดคุยกับเพื่อนหรือครอบครัวเป็นการระบายสิ่งที่เรารู้สึกว่าเราเหนื่อยเราท้อกับมันให้เค้าฟังก็อาจจะทำให้เรารู้สึกดีขึ้นเราก็สามารถที่จะก้าวผ่านตรงนี้ไปให้ได้ค่ะ",
      },
    ],
  },
  {
    id: 13,
    type: type[1],
    title: "D.Idea.Power",
    creator: "Porntawee Juntaramas",
    creatorTh: "พรทวี จันทรมาศ",
    nickName: "Bank",
    nickNameTh: "แบงค์",
    studentId: "425",
    thesisTh:
      "การออกแบบและพัฒนาเว็บแอปพลิเคชันแนวคิดการสร้างพลังงานทดแทนแบบอื่นเชิงทดลองตามความคิดสร้างสรรค์",
    thesis:
      "Web Application Design and Development the Concept of Creating Alternative Energy Other Experimental Designs Based on Creativity",
    logoUrl: `${imageUrl}/${logoUrl}/425/bank_logo.png`,
    category: "High School Students",
    advisor: `${advisor[7]}`,
    scopeTh:
      "เป็นการให้บุคคลในยุคนี้ที่ผู้คน Gen Z (อายุ10 - 21) ในยุคใหม่นี้ผู้คนเริ่มให้ความสนใจเกี่ยวกับพลังหรือชื่นชอบทางด้านวิทยาศาสตร์ มีความชอบแนวการประดิษฐ์ ได้มีโอกาสในการออกแบบประดิษฐ์ สร้างพลังงานไฟฟ้า เพื่อที่จะสามารถนำไปใช้ประโยชน์ได้หลายๆอย่างได้ในอนาคต เช่น การชาร์จแบตมือถือเอง เป็นต้น",
    scope:
      "This allows individuals in the modern era, particularly members of Generation Z (ages 10–21), who are increasingly interested in energy and passionate about science and innovation, to have the opportunity to design and invent ways to generate electricity. Such innovations can be beneficial for various purposes in the future, such as creating a way to charge mobile phones independently.",
    ideaConceptTh:
      "ข้อมูลเกี่ยวกับการทดลองด้านพลังงานไฟฟ้าในประเทศไทยสามารถพบได้ในรายงานหรือโครงการของหน่วยงานรัฐบาล เช่น การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย (EGAT) และกระทรวงพลังงาน รวมถึงงานวิจัยจากมหาวิทยาลัยต่าง ๆ ที่มีการศึกษาและทดลองเกี่ยวกับพลังงานไฟฟ้า ทั้งในด้านพลังงานหมุนเวียน การใช้พลังงานอย่างมีประสิทธิภาพ และการพัฒนาระบบไฟฟ้าในประเทศ",
    ideaConcept:
      "Information on electricity-related experiments in Thailand can be found in reports or projects from government agencies such as the Electricity Generating Authority of Thailand (EGAT) and the Ministry of Energy, as well as research conducted by various universities. These studies cover areas such as renewable energy, energy efficiency, and the development of the national electricity system.",
    codingLanguage: ["PHP", "HTML", "CSS", "JavaScript"],
    databaseSystem: ["MySQL"],
    codingTool: ["Visual Studio Code"],
    designTool: ["Figma"],
    targetGroup:
      "People in this era, Gen Z (ages 10 - 21) in this new era, people are starting to be interested in power or are interested in science. They like invention.",
    targetGroupTh:
      "บุคคลในยุคนี้ที่ผู้คน Gen Z (อายุ10 - 21) ในยุคใหม่นี้ผู้คนเริ่มให้ความสนใจเกี่ยวกับพลังหรือชื่นชอบทางด้านวิทยาศาสตร์ มีความชอบแนวการประดิษฐ์",
    comments: [
      "อยากให้ปรับปรุงมันให้เสถียนและสามรถใช้งานได้ทั่วถึง",
      "อยากให้แก้ไขที่มีข้อผิดพลาดเล็กน้อยให้สมบูรณ์มากขึ้น",
      "อยากให้เพิ่มรายละเอียดข้อมูลมากขึ้น",
    ],
    functions: [
      {
        id: 1,
        title_en: "Electrical energy teaching media",
        title_th: "สื่อการสอนพลังงานไฟฟ้า",
      },
      {
        id: 2,
        title_en: "Viewing and sharing DIY projects to create energy",
        title_th: "การดูผลงงานและแชร์ผลงาน DIY สร้างพลังงาน",
      },
      {
        id: 3,
        title_en: "Energy generation project plan recording form",
        title_th: "ฟร์อมบันทึกแผนโปรเจคการสร้างพลังาน",
      },
    ],
    projectInfoImageUrl: [
      `${imageUrl}/${projectInfoUrl}/425/bank_01.png`,
      `${imageUrl}/${projectInfoUrl}/425/bank_02.png`,
      `${imageUrl}/${projectInfoUrl}/425/bank_03.png`,
    ],
    testImageUrl: [
      `${imageUrl}/${testUrl}/425/bank_01.png`,
      `${imageUrl}/${testUrl}/425/bank_02.png`,
      `${imageUrl}/${testUrl}/425/bank_03.png`,
      `${imageUrl}/${testUrl}/425/bank_04.png`,
    ],
    keyFunctionImageUrl: `${imageUrl}/${keyFunctionUrl}/425/bank_01.png`,
    mainProfile: `${imageUrl}/${profileUrl}/425/Bank_mainProfile.JPG`,
    subProfile: `${imageUrl}/${profileUrl}/425/Bank_subProfile.JPG`,
    screenShots: [
      `${imageUrl}/${screenshotsUrl}/425/bank_01.png`,
      `${imageUrl}/${screenshotsUrl}/425/bank_02.png`,
      `${imageUrl}/${screenshotsUrl}/425/bank_03.png`,
      `${imageUrl}/${screenshotsUrl}/425/bank_04.png`,
      `${imageUrl}/${screenshotsUrl}/425/bank_05.png`,
    ],
    designTestScore: "3.02",
    usefulTestScore: "3.07",
    titleInfographic:
      "การออกแบบและพัฒนาเว็บแอปพลิเคชัน แนวคิดการสร้างพลังทดแทนแบบอื่นเชิงทดลองตามความคิดสร้างสรรค์",
    infographicUrl: `${imageUrl}/${infographicUrl}/425/bank_infographic.png`,
    descriptionInfographic:
      "เป็การชวนให้เยาวชน Gen Z เสนอไอเดียหรือทดลองออกแบบวิธีการให้ได้มาซึ่งพลังงานไฟฟ้าด้วยภูมิปัญญา ชาวบ้านหรือไอเดียแบบคนไทยบนเทมเพลตที่จัดทำไว้ และเผยแพร่ไอเดียดังกล่าว ลง ในหน้าเว็บ",
    quote: "มีความแน่วแน่อย่าแพ้รีบทำให้สำเร็จ",
    email: "Porntawee2544@gmail.com",
    linkedIn: "www.linkedin.com/in/porntawee-juntaramas-7428a9374",
    afterExhibited: "รู้สึกดีใจที่จะได้ทำงเพื่อหาเงินและสะสมประสบการณ์",
    ToolRecommended: [
      { id: 1, tool: tools[1] },
      {
        id: 2,
        tool: tools[3],
      },
      {
        id: 3,
        tool: tools[0],
      },
    ],
    interviewCover: `${imageUrl}/${insightCover}/interview_425.png`,
    interview: [
      {
        id: 1,
        timestamp: 14,
        question: question[0],
        videoUrl: "https://www.youtube.com/watch?v=I8qrv9GwqDM",
        answer:
          "จุดเริ่มต้นของโปรเจคนี้เกิดจากการที่ได้จุดประกายไอเดียจากโปรเจคครั้งก่อนที่มีการเปลี่ยนแปลงคือได้แนวคิดว่าจะสามารถเป็นสื่อการเรียนรู้สามารถเป็นชุมชนแชร์ผลงานประดิษฐ์ได้และเป็นที่ชุมชนของคนที่ชอบประดิษฐ์",
      },
      {
        id: 2,
        timestamp: 49,
        question: question[1],
        videoUrl: "https://www.youtube.com/watch?v=I8qrv9GwqDM",
        answer:
          "ไอเดียผมในครั้งแรกนั้นออกมาเป็นแบบเกี่ยวกับการให้ความรู้ภัยอันตรายการใช้งานออนไลน์ และ การแนะนำป้องกันการถูกมิจฉาชีพออนไลน์หลอก",
      },
      {
        id: 3,
        timestamp: 63,
        question: question[2],
        videoUrl: "https://www.youtube.com/watch?v=I8qrv9GwqDM",
        answer:
          "อยากพัฒนาในส่วนของเกี่ยวกับการที่สามารถเป็นที่ต้องการในการทำงานแบบกลุ่มด้วยกัน",
      },
      {
        id: 4,
        timestamp: 81,
        question: question[5],
        videoUrl: "https://www.youtube.com/watch?v=I8qrv9GwqDM",
        answer:
          "อ่อของผมจะวิ่งออกกำลังกายและทำสมาธิวันเว้นวันเพื่อให้สมองผ่อนคลายครับ",
      },
    ],
  },
];

export const teamRoles = [
  {
    role: "Project Manager",
    names: [
      "Songpob Hamthanan",
      "Parichat Nuaon",
      "Jiratchaya Nilsuay",
      "Piyanut Plaimee",
    ],
  },
  {
    role: "Web Design",
    names: [
      "Parichat Nueon",
      "Jiratchaya Ninsuay",
      "Kanna Mueangthianwatthana",
    ],
  },
  {
    role: "Web Development",
    names: ["Piyanut Plaimee", "Kajbandit Kundee"],
  },
  {
    role: "Video Editor",
    names: ["Supareuk Singsai", "Jiratchaya Ninsuay"],
  },
  {
    role: "Art Direction & Graphic Design",
    names: [
      "Kunyada Chammee",
      "Supareuk Singsai",
      "Hatthakarn Janchavee",
      "Waralee Patsarn",
    ],
  },
  {
    role: "Media & Public Relation",
    names: ["Gasorn Supawong", "Supareuk Singsai", "Waralee Patsarn"],
  },
  {
    role: "Photographer & Production",
    names: ["Supareuk Singsai", "Songpob Hamthanan"],
  },
  {
    role: "Financial Manager",
    names: ["Silpsupa Sereesuachart", "Jiratchaya Ninsuay"],
  },
];

export const allReels = [
  {
    id: 1,
    title: "FINDTYPE",
    thesis:
      "การออกแบบและพัฒนาเว็บแอปพลิเคชันเพื่อเป็นตัวกลางในการซื้อ-ขายคีย์บอร์ดกลไกตามความสนใจสำหรับผู้ชื่นชอบคีย์บอร์ด",
    youtubeVideoId: "l9wpjPvD-h8",
    cover: `${imageUrl}/${keynoteCover}/keynote_130.png`,
    timestamp: 96,
  },
  {
    id: 2,
    title: "MOVEQUEST",
    thesis:
      "การออกแบบสื่อปฏิสัมพันธ์เพื่อส่งเสริมการออกกําลังกายสำหรับเด็กชั้นประถมศึกษาตอนต้น",
    youtubeVideoId: "l9wpjPvD-h8",
    cover: `${imageUrl}/${keynoteCover}/keynote_238.png`,
    timestamp: 339,
  },
  {
    id: 3,
    title: "B.less",
    thesis:
      "การออกแบบและพัฒนาศิลปะอินเทอร์แอคทีฟเพื่อสร้างความตระหนักถึงภัยของบุหรี่ไฟฟ้า",
    youtubeVideoId: "l9wpjPvD-h8",
    cover: `${imageUrl}/${keynoteCover}/keynote_129.png`,
    timestamp: 1112,
  },
  {
    id: 4,
    title: "StockPlay",
    thesis:
      "การออกแบบและพัฒนาแอปพลิเคชันเพื่อส่งเสริมทักษะการลงทุนในหุ้นขั้นพื้นฐาน",
    youtubeVideoId: "l9wpjPvD-h8",
    cover: `${imageUrl}/${keynoteCover}/keynote_451.png`,
    timestamp: 946,
  },
  {
    id: 5,
    title: "HOMMIE",
    thesis:
      "การออกแบบและพัฒนาพัฒนาแพลตฟอร์มส่งเสริมกิจกรรมครอบครัว กรณีศึกษาครอบครัวเดี่ยวและครอบครัวพ่อ หรือแม่เลี้ยงเดี่ยว",
    youtubeVideoId: "l9wpjPvD-h8",
    cover: `${imageUrl}/${keynoteCover}/keynote_134.png`,
    timestamp: 1821,
  },
  {
    id: 6,
    title: "BEYOU",
    thesis:
      "การพัฒนาเว็บแอปพลิเคชันสำหรับการเลือกซื้อเครื่องสำอางให้เหมาะสมกับตนเอง",
    youtubeVideoId: "l9wpjPvD-h8",
    cover: `${imageUrl}/${keynoteCover}/keynote_136.png`,
    timestamp: 2012,
  },
  {
    id: 7,
    title: "Flowa",
    thesis:
      "การออกแบบและพัฒนาสื่อปฏิสัมพันธ์เพื่อเสริมสร้างความรู้ พื้นฐานด้านการเขียนโปรแกรมสำหรับเด็กมัธยมต้น",
    youtubeVideoId: "l9wpjPvD-h8",
    cover: `${imageUrl}/${keynoteCover}/keynote_237.png`,
    timestamp: 1244,
  },
  {
    id: 8,
    title: "Blooms",
    thesis:
      "การออกแบบและพัฒนาเกมด้วยเทคนิคการประมวลผลเชิงพื้นที่เพื่อสร้างความผ่อนคลาย",
    youtubeVideoId: "l9wpjPvD-h8",
    cover: `${imageUrl}/${keynoteCover}/keynote_133.png`,
    timestamp: 604,
  },
  {
    id: 9,
    title: "Clowney",
    thesis:
      "การออกแบบและพัฒนาสื่อปฏิสัมพันธ์เพื่อส่งเสริมพัฒนาการด้านกล้ามเนื้อ กรณีศึกษาเด็กประถมศึกษาปีที่ 1",
    youtubeVideoId: "l9wpjPvD-h8",
    cover: `${imageUrl}/${keynoteCover}/keynote_135.png`,
    timestamp: 491,
  },
  {
    id: 10,
    title: "MakeMeSafe",
    thesis:
      "การออกแบบและพัฒนาเว็บแอปพลิเคชัน เพื่อเป็นเครื่องมือ ที่ช่วยในการประเมินความเสี่ยงและป้องกันการบูลลี่ใน โรงเรียนกรณีศึกษาเด็กอายุ 12-15 ปี",
    youtubeVideoId: "l9wpjPvD-h8",
    cover: `${imageUrl}/${keynoteCover}/keynote_131.png`,
    timestamp: 96,
  },
  {
    id: 11,
    title: "Plantix",
    thesis:
      "การออกแบบและพัฒนาระบบดูแลฟาร์มผักอัตโนมัติกรณีศึกษา ฟาร์มคุณปราโมทย์ ต.หนองปรือ อ.หนองปรือ จ.กาญจนบุรี",
    youtubeVideoId: "l9wpjPvD-h8",
    cover: `${imageUrl}/${keynoteCover}/keynote_236.png`,
    timestamp: 1442,
  },
  {
    id: 12,
    title: "ThaiDam Vibe",
    thesis:
      "การออกแบบและพัฒนาเว็บแอปพลิเคชันในเชิงสื่อการเรียนรู้เกี่ยวกับชาติพันธุ์ไทยทรงดำ และชาติพันธุ์พื้นถิ่นเพื่ออนุรักษ์ และส่งเสริมการท่องเที่ยว กรณีศึกษาในเขตอำเภอ เขาย้อย จังหวัดเพชรบุรี",
    youtubeVideoId: "l9wpjPvD-h8",
    cover: `${imageUrl}/${keynoteCover}/keynote_137.png`,
    timestamp: 777,
  },
  {
    id: 13,
    title: "D.Idea.Power",
    thesis:
      "การออกแบบและพัฒนาเว็บแอปพลิเคชันแนวคิดการสร้างพลังทดแทนแบบอื่นเชิงทดลองตามความคิดสร้างสรรค์",
    youtubeVideoId: "l9wpjPvD-h8",
    cover: `${imageUrl}/${keynoteCover}/keynote_425.png`,
    timestamp: 2206,
  },
];

export const logoSponsors = [
  { name: "Deemmi", logoUrl: DeemiLogo, websiteUrl: "https://deemmi.com/" },
  {
    name: "DUCK LAB",
    logoUrl: DucklabLogo,
    websiteUrl: "https://ducklab.co.th/",
  },
];

export const textSponsors = [
  { name: "OBOON TECHNOLOGY" },
  { name: "NATVIPA THANANCHAYANON" },
  { name: "ARRIYAPACH JEAMWARASAWAT" },
  { name: "SUWIT SUPSRINGKAR" },
  { name: "PONPITAK SIRIMART" },
  { name: "PANIDA CHANPEN" },
];

export const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://facebook.com/funcslash/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/funcslash/",
  },
  { name: "X", icon: FaXTwitter, url: "https://x.com/funcslash/" },
  { name: "TikTok", icon: FaTiktok, url: "https://tiktok.com/@funcslash/" },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@funcslash",
  },
];

export const ArticleGraphicData = [
  {
    id: 1,
    coverImage: `${imageUrl}/${coverUrl}/design_01.png`,
    imageUrl: `${imageUrl}/${designInfographicUrl}/design_01.png`,
    title: "Pantone Colors of the Year",
    description:
      "“สีแห่งปี” เพื่อสะท้อนถึงอารมณ์ สภาพสังคม วัฒนธรรม และแนวโน้มของโลกในแต่ละปี",
  },
  {
    id: 2,
    coverImage: `${imageUrl}/${coverUrl}/design_02.png`,
    imageUrl: `${imageUrl}/${designInfographicUrl}/design_02.png`,
    title: "ทำไม UX/UI Designer ถึงเป็นฟันเฟืองสำคัญของโลกดิจิทัล?",
    description:
      "UX/UI Designer บทบาทสำคัญในการทำให้โลกดิจิทัลมีความเป็นมิตร เข้าถึงง่าย และตอบสนองความต้องการของผู้ใช้ได้อย่างมีประสิทธิภาพและมีคุณภาพ",
  },
  {
    id: 3,
    coverImage: `${imageUrl}/${coverUrl}/design_03.png`,
    imageUrl: `${imageUrl}/${designInfographicUrl}/design_03.png`,
    title: "5 AI Tools ที่นักออกแบบควรรู้จัก",
    description:
      "AI Tools เหล่านี้ช่วยให้นักออกแบบทำงานได้รวดเร็วขึ้น เพิ่มความคิดสร้างสรรค์ และตอบสนองความต้องการของตลาดดิจิทัลที่เปลี่ยนแปลงอย่างรวดเร็วในปี 2025",
  },
];

export const ArticleCodingData = [
  {
    id: 1,
    coverUrl: `${imageUrl}/${coverUrl}/coding_01.png`,
    imageUrl: `${imageUrl}/${devInfographicUrl}/coding_01.png`,
    title: "4 แอปช่วยฝึกรากฐานการโค้ด",
    description:
      "แนะนำแอปฝึกขยับปีก วางรากฐานการเขียนโค้ด ตั้งแต่ไม่มีพื้นฐานสำหรับสายเรียนรู้ด้วยตัวเอง หรือต้องการย้ายสาย",
  },
  {
    id: 2,
    coverUrl: `${imageUrl}/${coverUrl}/coding_02.png`,
    imageUrl: `${imageUrl}/${devInfographicUrl}/coding_02.png`,
    title: "รู้จักเครื่องมือสำคัญก่อนพัฒนาสื่อ INTERACTIVE",
    description: `ภาษาคอมพิวเตอร์ที่ใช้สร้างหน้าเว็บ หรือที่เรียกว่า HyperText Markup Language. HTML เป็นภาษาหลักที่ใช้ในการสร้างโครงสร้างและเนื้อหาของหน้าเว็บ โดยอาศัย "แท็ก" (tags) ในการกำหนดรูปแบบและโครงสร้างของข้อมูล`,
  },
  {
    id: 3,
    coverUrl: `${imageUrl}/${coverUrl}/coding_03.png`,
    imageUrl: `${imageUrl}/${devInfographicUrl}/coding_03.png`,
    title: "HTML โครงสร้างพื้นฐานเว็บไซต์",
    description:
      "สื่อปฎิสัมพันธ์สุดล้ำ ตอบโต้กับผู้ใช้งานแบบ สิ่งสองสิ่งหรือมากกว่า เพื่อสร้างประสบการณ์ผ่านประสาทสัมผัสทั้ง 5",
  },
];

export const insightDesign = [
  {
    id: 1,
    title: "แบ่งปันความรู้ด้านการออกแบบ",
    description: "พี่โมเดล รุ่นที่ 17",
    cover: `${imageUrl}/${insightCover}/design_01.png`,
    videoUrl: "ohbN-tWdWuM",
  },
  {
    id: 2,
    title: "แบ่งปันความรู้ด้านการออกแบบ",
    description: "พี่โอเล่ รุ่นที่ 12",
    cover: `${imageUrl}/${insightCover}/design_02.png`,
    videoUrl: "2dSy8WFSrqg",
  },
  {
    id: 3,
    title: "แบ่งปันความรู้ด้านการออกแบบ",
    description: "พี่ตะวัน รุ่นที่12 ",
    cover: `${imageUrl}/${insightCover}/design_03.png`,
    videoUrl: "3cGHsQpV_Lw",
  },
  {
    id: 4,
    title: "แบ่งปันความรู้ด้านการออกแบบ",
    description: "พี่พลอย รุ่นที่ 17",
    cover: `${imageUrl}/${insightCover}/design_04.png`,
    videoUrl: "r9ysgWVfBgQ",
  },
  {
    id: 5,
    title: "แบ่งปันความรู้ด้านการออกแบบ",
    description: "พี่มี่ รุ่นที่ 12",
    cover: `${imageUrl}/${insightCover}/design_05.png`,
    videoUrl: "b7dDE3I3nwk",
  },
];

export const insightCoding = [
  {
    id: 1,
    title: "แบ่งปันความรู้ด้านการโค้ดดิ้ง",
    description: "พี่เต้ย รุ่นที่ 17",
    cover: `${imageUrl}/${insightCover}/dev_01.png`,
    videoUrl: "TWdTy_YpX4A",
  },
  {
    id: 2,
    title: "แบ่งปันความรู้ด้านโค้ดดิ้ง",
    description: "พี่น้ำ รุ่นที่17",
    cover: `${imageUrl}/${insightCover}/dev_02.png`,
    videoUrl: "nrK3Qyf30Bs",
  },
  {
    id: 3,
    title: "แบ่งปันความรู้ด้านโค้ดดิ้ง",
    description: "พี่แบงค์ รุ่นที่ 17",
    cover: `${imageUrl}/${insightCover}/dev_03.png`,
    videoUrl: "ux9T7inePak",
  },
  {
    id: 4,
    title: "แบ่งปันความรู้ด้านโค้ดดิ้ง",
    description: "พี่เพชร รุ่นที่ 17",
    cover: `${imageUrl}/${insightCover}/dev_04.png`,
    videoUrl: "1UXwnnT_eHY",
  },
  {
    id: 5,
    title: "แบ่งปันความรู้ด้านโค้ดดิ้ง",
    description: "พี่ฟีฟ่า รุ่นที่ 18",
    cover: `${imageUrl}/${insightCover}/dev_05.png`,
    videoUrl: "kSggs_Fd7pc",
  },
];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    