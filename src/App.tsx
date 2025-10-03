import "./App.css";
import { Card, CardContent, CardHeader, CardIcon } from "./components/Card";
import fiveStarsImg from "./assets/images/illustration-five-stars.webp";
import multiplePlatformsImg from "./assets/images/illustration-multiple-platforms.webp";
import consistentScheduleImg from "./assets/images/illustration-consistent-schedule.webp";
import schedulePostsImg from "./assets/images/illustration-schedule-posts.webp";
import growFollowersImg from "./assets/images/illustration-grow-followers.webp";
import audienceGrowthImg from "./assets/images/illustration-audience-growth.webp";
import createPostImg from "./assets/images/illustration-create-post.webp";
import aiContentImg from "./assets/images/illustration-ai-content.webp";

function App() {
  return (
    <main className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 gap-10">
      <Card bgColor="hsl(256, 67%, 59%) " className="lg:p-2 p-10">
        <CardHeader className="font-semibold text-6xl px-4 ">
          Social Media <span className=" text-yellow-500 ">10x</span>{" "}
          <i>Faster</i> with AI
        </CardHeader>
        <CardIcon src={fiveStarsImg} alt="Icône" className="max-h-7 mb-2" />
        <CardContent>
          <span className="italic">Over 4,000 5-star reviews</span>
        </CardContent>
      </Card>
      <Card bgColor="#fff" className="lg:items-start">
        <CardIcon src={multiplePlatformsImg} alt="Icône" className="mb-5" />
        <CardHeader className="text-left text-2xl text-black font-semibold tracking-tighter pr-8">
          Manage multiple accounts and platforms.
        </CardHeader>
      </Card>
      <Card
        bgColor="hsl(39, 100%, 71%)"
        className="p-5 pb-0  lg:overflow-hidden justify-start "
      >
        <CardHeader className="text-left  text-2xl font-semibold text-black tracking-tighter pr-8">
          Maintain a consistent posting schedule.
        </CardHeader>
        <CardIcon
          alt=""
          src={consistentScheduleImg}
          className="w-full lg:h-19 object-contain"
        />
      </Card>
      <Card
        bgColor="hsl(254, 88%, 90%)"
        className="overflow-hidden items-start p-5"
      >
        <CardHeader className="font-semibold text-2xl lg:text-left pr-5 text-black tracking-tighter">
          Schedule to social media.
        </CardHeader>
        <CardIcon
          alt=""
          src={schedulePostsImg}
          className="lg:max-h-75 lg:w-200 lg:h-full mb-5"
        />
        <CardContent className="text-black lg:text-left">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </CardContent>
      </Card>
      <Card
        bgColor="hsl(256, 67%, 59%)"
        className="flex lg:flex-row lg:items-center"
      >
        <CardIcon
          alt=""
          src={growFollowersImg}
          className="max-h-60 mb-5 lg:mb-0"
        />
        <CardHeader className="text-4xl font-semibold text-left tracking-tighter">
          Grow followers with non-stop content.
        </CardHeader>
      </Card>
      <Card bgColor="#fff" className="items-start">
        <CardHeader className="text-left flex items-center mb-2 font-medium text-5xl text-black">
          <span className="text-3xl text-center align-middle mr-1 text-black">
            &#10095;
          </span>
          56%
        </CardHeader>
        <CardContent className="text-base font-normal text-black text-left  mb-5 lg:mb-auto">
          faster audience growth
        </CardContent>
        <CardIcon alt="" src={audienceGrowthImg} className="max-h-17" />
      </Card>
      <Card bgColor="hsl(31, 66%, 93%)" className="items-start py-7 px-5">
        <CardHeader className="text-left font-semibold text-black text-3xl tracking-tighter">
          Create and schedule content{" "}
          <span className="italic text-purple-500">quicker</span>
        </CardHeader>
        <CardIcon alt="" src={createPostImg} className="max-h-25" />
      </Card>
      <Card bgColor="hsl(39, 100%, 71%)" className="items-start py-7 px-5">
        <CardHeader className="text-left text-3xl font-semibold text-black tracking-tighter">
          Write your content using AI.
        </CardHeader>
        <CardIcon alt="" src={aiContentImg} className="max-h-50" />
      </Card>
    </main>
  );
}

export default App;
