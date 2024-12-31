import Image from 'next/image'
import React from 'react'

const GhostWriting = () => {
  return (
    <div className='py-10 px-6 lg:px-10 2xl:px-44  items-center justify-center'>
      <h2 className='text-[26px] lg:text-[28px] font-bold'>What is <span className='text-[#11A4FF]'>Ghostwriting</span> and How Can It Benefit You?</h2>

      <div className='flex'>
        {/* text */}
        <div className='w-full lg:w-3/5 '>
            <p className='text-[14px] lg:text-[16px] pt-5'>Lorem ipsum odor amet, consectetuer adipiscing elit. Maecenas venenatis lectus dignissim quis ut rutrum porttitor dis porta erat sodales auctor integer sollicitudin primis nunc neque platea etiam ultrices suspendisse nunc sollicitudin vitae fusce egestas dolor eros faucibus lacus viverra cras pretium consectetur suscipit sem montes tincidunt dignissim pharetra ullamcorper fusce viverra tristique fermentum rutrum natoque facilisi malesuada sodales dapibus eros eget fringilla rhoncus morbi arcu vel libero sed viverra cras et netus suscipit non pharetra metus purus pulvinar montes felis rhoncus consectetur iaculis hac tellus taciti nec tortor facilisi eleifend ut porta fringilla curae consequat lacinia pulvinar lobortis sapien maximus curabitur sodales cubilia sem tempus taciti tempus lacinia dapibus primis dapibus diam ipsum class bibendum est habitant cras posuere euismod aliquam leo in vulputate varius nulla euismod inceptos turpis sociosqu hendrerit vehicula et tempus quisque laoreet convallis sit posuere litora morbi molestie facilisis aliquam vestibulum aliquam leo nascetur nulla massa nulla molestie et per vestibulum felis sodales natoque tempus pellentesque velit accumsan habitant accumsan mattis dapibus penatibus facilisis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sapiente porro quis delectus voluptate nobis nihil ex reprehenderit perferendis asperiores consequuntur praesentium quam possimus. Maxime ut voluptas quaerat cumque nemo.</p>

            <p className='text-[14px] lg:text-[16px] pt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque esse aut suscipit repudiandae aliquid eius beatae. Doloribus, ex! Tempore doloribus tempora nihil reprehenderit nostrum suscipit autem ex soluta. Veritatis, aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cum ducimus amet quod rem soluta ullam aspernatur corporis, hic obcaecati omnis sed perferendis officia atque facere modi aperiam perspiciatis error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores quo enim alias quidem id provident, unde qui voluptates adipisci odio aliquid quos architecto atque incidunt, eius cupiditate cum. Quia.</p>
        </div>

        {/* tasweer */}
        <div className='ml-4 xl:pl-20 hidden lg:block items-end'>
            <Image
                src="/Group_50.png"
                alt='writing service'
                height={300}
                width={300}
                className=''
            />
        </div>
      </div>

      <div>
        <p className='text-[14px] lg:text-[16px] pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate similique sit nemo est optio ad aliquid, dolor doloremque? Nesciunt mollitia vitae repudiandae! Voluptate nobis voluptas magni alias minima ipsa suscipit delectus nam eveniet, aspernatur recusandae cupiditate ut optio vel sit perferendis sunt dolor ea. Corrupti iusto repellat cum. Necessitatibus voluptate, dignissimos ex laborum modi quam quaerat quo! Provident explicabo facilis laborum, alias quod suscipit, consequuntur natus iste ipsam nesciunt repellendus voluptate voluptas eos ad aliquam animi illo ullam! Fugiat harum distinctio exercitationem quidem nihil eum repellat, laudantium tempore cumque, ipsum assumenda veritatis culpa neque ut esse impedit reiciendis soluta. Accusantium consequatur corrupti minima amet aliquid repellendus maxime tenetur cum enim consectetur praesentium inventore recusandae non mollitia, vitae pariatur. Consectetur laudantium adipisci aperiam aliquid deleniti quasi iusto accusantium. Ex tempore pariatur temporibus perspiciatis! Dolorem, ipsa libero officia possimus cupiditate esse accusamus reiciendis ipsum suscipit fuga excepturi tempora, ullam totam, mollitia necessitatibus alias voluptatem praesentium? Ducimus, doloremque quam commodi consequatur molestias laborum neque explicabo? Veritatis eaque eum laborum, voluptate labore ipsa odio. Ducimus eaque delectus quam, adipisci alias maiores laudantium vel ipsa tempore similique dolores impedit voluptatibus quas ipsum quae ut enim natus quidem reprehenderit recusandae numquam illo sint sit dignissimos! Expedita.</p>
      </div>
    </div>
  )
}

export default GhostWriting
