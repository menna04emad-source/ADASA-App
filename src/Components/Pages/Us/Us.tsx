import { Link } from "react-router-dom";
import Blog, { post } from "../Blog/Blog";


interface Stats {
  icon: string;
  number: string;
  text: string;
}

interface Values {
  icon: string;
  title: string;
  description: string;
}

const stats: Stats[] = [
  {
    icon: "▣",
    number: "2+ مليون",
    text: "قارئ شهرياً",
  },
  {
    icon: "▦",
    number: "500+",
    text: "مقالة منشورة",
  },
  {
    icon: "✎",
    number: "50+",
    text: "كاتب خبير",
  },
  {
    icon: "▢",
    number: "15+",
    text: "تصنيف",
  },
];

const values: Values[] = [
  {
    icon: "◎",
    title: "الجودة أولاً",
    description: "محتوى مدروس ومكتوب بخبرة",
  },
  {
    icon: "ϟ",
    title: "تركيز عملي",
    description: "أمثلة واقعية يمكنك تطبيقها اليوم",
  },
  {
    icon: "♢",
    title: "المجتمع",
    description: "تعلم مع آلاف المصورين",
  },
  {
    icon: "⟳",
    title: "دائماً محدث",
    description: "أحدث الاتجاهات وأفضل الممارسات",
  },
];

export default function Us() {
 
   

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#090909] text-white overflow-hidden"
    >
      {/* =========================
          HERO / من نحن
      ========================= */}
      <section className="relative border-b border-white/10">

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">

          {/* Small Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/5 px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>

            <span className="text-orange-500 font-medium">
              من نحن
            </span>

            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            مهمتنا هي{" "}
            <span className="text-orange-500">
              الإلهام والإبداع
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-4xl mx-auto text-gray-400 text-lg md:text-xl leading-9">
            مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار
            المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة
            المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى
            عالي الجودة.
          </p>

          {/* =========================
              STATISTICS
          ========================= */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">

            {stats.map((stat) => (
              <div
                key={stat.text}
                className=" group  rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/[0.04]">
                {/* Icon */}
                <div className="text-orange-500 text-4xl mb-4">
                  {stat.icon}
                </div>

                {/* Number */}
                <h3 className="text-2xl md:text-3xl font-bold text-orange-500">
                  {stat.number}
                </h3>

                {/* Text */}
                <p className="text-gray-500 mt-2">
                  {stat.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          OUR VALUES
      ========================= */}
      <section className="relative border-b border-white/10 bg-[#101010]">

        <div className="max-w-6xl mx-auto px-6 py-20">

          {/* Section Heading */}
          <div className="text-center mb-16">

            <div className="flex items-center justify-center gap-3 mb-5">

              <span className="h-8 w-1 rounded-full bg-orange-500"></span>

              <h2 className="text-3xl md:text-4xl font-bold">
                قيمنا
              </h2>

              <span className="h-8 w-1 rounded-full bg-orange-500"></span>

            </div>

            <p className="text-gray-500 text-lg">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>

          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {values.map((value) => (
              <div
                key={value.title}
                className=" rounded-2xl border border-white/10 bg-white/[0.025] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.04] " >

                {/* Icon */}
                <div className="text-orange-500 text-5xl mb-5">
                  {value.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-7">
                  {value.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          OUR STORY
      ========================= */}
      <section className="relative border-b border-white/10">

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-24">

          {/* Label */}
          <div className="text-center mb-12">

            <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/40 bg-orange-500/5 px-5 py-2">

              <span className="w-2 h-2 rounded-full bg-orange-500"></span>

              <span className="text-orange-500">
                قصتنا
              </span>

              <span className="w-2 h-2 rounded-full bg-orange-500"></span>

            </div>

          </div>

          {/* Story */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:p-12">

            <h2 className="text-3xl font-bold mb-8">
              كيف بدأت عدسة؟
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-9">

              <p>
                بدأت <span className="text-orange-500 font-semibold">عدسة</span>
                {" "}من شغف بسيط بالتصوير ورغبة في إنشاء مساحة عربية
                تجمع المصورين ومحبي التصوير في مكان واحد.
              </p>

              <p>
                مع الوقت أصبحت عدسة منصة لمشاركة المعرفة والخبرات
                العملية في مجال التصوير الفوتوغرافي، بدايةً من أساسيات
                استخدام الكاميرا وحتى التقنيات المتقدمة.
              </p>

              <p>
                هدفنا ليس فقط أن نخبرك كيف تلتقط صورة أفضل، بل أن
                نساعدك على تطوير عينك كمصور واكتشاف أسلوبك الخاص.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =========================
          WHAT WE OFFER
      ========================= */}
      <section className="bg-[#101010]">

        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="text-center mb-14">

            <div className="flex items-center justify-center gap-3 mb-5">

              <span className="h-8 w-1 rounded-full bg-orange-500"></span>

              <h2 className="text-3xl md:text-4xl font-bold">
                ماذا نقدم؟
              </h2>

              <span className="h-8 w-1 rounded-full bg-orange-500"></span>

            </div>

            <p className="text-gray-500 text-lg">
              كل ما تحتاجه لتطوير مهاراتك في التصوير
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 hover:border-orange-500/40 transition">
              <div className="text-orange-500 text-4xl mb-5">
                📖
              </div>

              <h3 className="text-xl font-bold mb-4">
                مقالات تعليمية
              </h3>

              <p className="text-gray-500 leading-8">
                شروحات مبسطة وعملية تساعدك على فهم أساسيات التصوير
                وتطوير مستواك خطوة بخطوة.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 hover:border-orange-500/40 transition">
              <div className="text-orange-500 text-4xl mb-5">
                📷
              </div>

              <h3 className="text-xl font-bold mb-4">
                نصائح للمصورين
              </h3>

              <p className="text-gray-500 leading-8">
                نصائح وتقنيات يمكنك تطبيقها مباشرة لتحسين صورك
                والوصول إلى نتائج أكثر احترافية.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 hover:border-orange-500/40 transition">
              <div className="text-orange-500 text-4xl mb-5">
                ⚙
              </div>

              <h3 className="text-xl font-bold mb-4">
                مراجعات المعدات
              </h3>

              <p className="text-gray-500 leading-8">
                معلومات ومراجعات تساعدك على فهم معدات التصوير
                واختيار ما يناسب احتياجاتك.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================= */}
      <section className="relative overflow-hidden">

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">

          <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/40 bg-orange-500/5 px-5 py-2 mb-7">

            <span className="w-2 h-2 rounded-full bg-orange-500"></span>

            <span className="text-orange-500">
              انضم إلينا
            </span>

            <span className="w-2 h-2 rounded-full bg-orange-500"></span>

          </div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            مستعد لتطوير مهاراتك
            <span className="text-orange-500"> في التصوير؟</span>
          </h2>

          <p className="text-gray-500 text-lg leading-8 mb-8">
            استكشف مقالاتنا وتعلم تقنيات جديدة تساعدك على التقاط
            صور أفضل وصنع قصتك الخاصة.
          </p>

          <Link to={Blog}>
            <button
              className=" rounded-xl bg-orange-500 px-8 py-3 font-bold  text-black transition hover:bg-orange-400  hover:scale-105 ">
           استكشف المقالات
            </button>
          </Link>

        </div>
      </section>
<section>
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            تعرف على كتابنا
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-400 md:text-lg">
            فريقنا من المصورين والكتاب ذوي الخبرة يشاركون معرفتهم مع المجتمع.
          </p>
        </div>

       {/* ================= AUTHOR CARD ================= */}
  {posts?.map(post, index) => 
         const author = post?.author;
       return(
        <section  className="mx-auto mt-20 max-w-6xl">

  <div className="mb-12 text-center">
    <h2 className="text-4xl font-black text-white md:text-5xl">
      عن الكاتب
    </h2>

    <p className="mt-4 text-gray-400">
      تعرف على صاحب هذا المقال وخبرته في مجال التصوير.
    </p>
  </div>


  <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-[#151515] p-8 text-center">

    {/* Avatar */}
    <div className="relative mx-auto w-fit">

      <img
        src={post.posts[0].author.avatar}
        alt={post.posts[0].author.name}
        className="h-28 w-28 rounded-full border-4 border-[#292929] object-cover"
      />

      {/* Orange check */}
      <span className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
        ✓
      </span>

    </div>


    {/* Name */}
    <h3 className="mt-6 text-2xl font-black text-white">
      {post.posts[0].author.name}
    </h3>


    {/* Role */}
    <p className="mt-2 font-semibold text-orange-500">
      {post.posts[0].author.role}
    </p>


    {/* Social buttons */}
    <div className="mt-6 flex justify-center gap-3">

      <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#242424] text-sm font-bold text-gray-400 transition hover:bg-orange-500 hover:text-white">
        in
      </button>

      <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#242424] text-sm font-bold text-gray-400 transition hover:bg-orange-500 hover:text-white">
        ◉
      </button>

      <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#242424] text-sm font-bold text-gray-400 transition hover:bg-orange-500 hover:text-white">
        X
      </button>

    </div>

  </div>
     

</section>
       )
       }




        {/* ================= CTA ================= */}

         <div className="relative mt-24 overflow-hidden rounded-3xl px-6 py-16 text-center md:px-10">

          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-500/10" />

          {/* Orange glow */}
          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative z-10">

            <h2 className="text-4xl font-black md:text-5xl">
              لديك أسئلة؟ دعنا نتحدث!
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا،
              أو تريد المساهمة، أو تريد فقط إلقاء التحية،
              لا تتردد في التواصل.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

              {/* Contact */}
              <a
                href="mailto:hello@adasah.com"
                className="flex min-w-[190px] items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                <span>✉</span>
                <span>تواصل معنا</span>
              </a>

              {/* Browse */}
              <Link
                to="/blog"
                className="flex min-w-[190px] items-center justify-center gap-3 rounded-xl border border-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-500"
              >
                <span>▣</span>
                <span>تصفح المقالات</span>
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
    </main>
  );



  
}
