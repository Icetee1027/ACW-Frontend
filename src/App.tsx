import React, { useState } from 'react'; // 引入 useState
import { AiOutlineClose } from 'react-icons/ai';

function App() {
  const [searchText, setSearchText] = useState(''); // 用來存儲搜尋框的文字

  // 當文字改變時更新 searchText
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // 清空搜尋框
  const clearSearch = () => {
    setSearchText('');
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* 頁首 */}
      <header className="w-full flex items-center py-6 px-4 lg:px-10 bg-white relative shadow-md">
        <a href="/home" className="text-xl font-bold">🅱️</a>

        {/* 搜尋框置中 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-96 max-w-[40%] px-4 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchText} // 由 state 控制輸入框的內容
            onChange={handleSearchChange} // 當用戶輸入時更新 state
            className="border-2 border-gray-300 rounded-full w-full px-4 py-1 outline-none font-bold text-sm shadow-sm placeholder-gray-500 pr-8"
          />

          {/* 叉叉圖標，只在有輸入文字時顯示 */}

          <AiOutlineClose
            onClick={clearSearch} // 點擊叉叉時清空輸入框
            className="absolute right-6 text-gray-600 cursor-pointer"
          />

        </div>

        {/* 右側功能按鈕 */}
        <div className="flex items-center space-x-2 lg:space-x-4 ml-auto">
          <a href="/shop" className="px-3 py-1 lg:px-10 lg:py-1 border-2 border-gray-700 rounded-xl text-sm lg:text-base">
            Shop
          </a>
          <a href="/members" className="px-3 py-1 lg:px-10 lg:py-1 border-3 border-gray-700 rounded-xl text-sm lg:text-base">
            Members
          </a>
          <a href="/cart" className="px-3 py-1 lg:px-10 lg:py-1 border-2 border-gray-700 rounded-xl text-sm lg:text-base">
            Cart
          </a>
        </div>
      </header>

      {/* 註冊表單 */}
      <main className="flex flex-col items-center my-8 px-4 w-full">
        <h1 className="text-6xl font-black mb-7">Sign up</h1> {/* 註冊標題 */}
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1 font-bold">姓名：</label> {/* 姓名標籤 */}
              <input
                type="text"
                placeholder="Value"
                className="w-full px-4 py-2 border rounded-md outline-none focus:border-gray-400"
              /> {/* 姓名輸入框 */}
            </div>
            <div>
              <label className="block text-gray-700 mb-1 font-bold">信箱：</label> {/* 信箱標籤 */}
              <input
                type="email"
                placeholder="Value"
                className="w-full px-4 py-2 border rounded-md outline-none focus:border-gray-400"
              /> {/* 信箱輸入框 */}
            </div>
            <div>
              <label className="block text-gray-700 mb-1 font-bold">密碼：</label> {/* 密碼標籤 */}
              <input
                type="password"
                placeholder="Value"
                className="w-full px-4 py-2 border rounded-md outline-none focus:border-gray-400"
              /> {/* 密碼輸入框 */}
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md mt-4"
            >
              Sign up
            </button> {/* 註冊按鈕 */}
          </form>
        </div>

        {/* 登入和註冊選項 */}
        <div className="flex mt-4 w-[250px] border-2 border-gray-500 rounded-full">
          <a href="/members" className="w-1/2 border-r-2 border-gray-500 px-4 py-1 text-center rounded-l-full">Sign in</a>
          <a href="/members" className="w-1/2 px-4 py-1 text-center bg-purple-200 text-gray-600-700 rounded-r-full">✔️ Sign up</a>
        </div>

      </main>



      {/* 頁尾 */}
      <footer className="mt-auto w-full bg-gray-50 py-8 px-8 shadow-[0_-4px_6px_-4px_rgba(0,0,0,0.2)]">
        <div className="grid grid-cols-4 gap-4 text-gray-700 text-sm text-left">
          {/* 第一列：圖標區塊 */}
          <div className="flex flex-col items-start justify-start w-full max-w-[400px] mx-auto">
            <p className="font-bold text-3xl">🅱️</p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 justify-start">
                <span className="text-xl text-gray-500">📸📖🎥❤️</span>
              </li>
            </ul>
          </div>

          {/* 使用案例區塊 */}
          <div className="flex flex-col items-start">
            <p className="font-bold">Use cases</p>
            <ul>
              <li>UI design</li>
              <li>UX design</li>
              <li>Wireframing</li>
              <li>Diagramming</li>
              <li>Brainstorming</li>
              <li>Online whiteboard</li>
              <li>Team collaboration</li>
            </ul>
          </div>

          {/* 探索區塊 */}
          <div className="flex flex-col items-start">
            <p className="font-bold">Explore</p>
            <ul>
              <li>Design</li>
              <li>Prototyping</li>
              <li>Development features</li>
              <li>Design systems</li>
              <li>Collaboration features</li>
              <li>Design process</li>
              <li>FigJam</li>
            </ul>
          </div>

          {/* 資源區塊 */}
          <div className="flex flex-col items-start">
            <p className="font-bold">Resources</p>
            <ul>
              <li>Blog</li>
              <li>Best practices</li>
              <li>Colors</li>
              <li>Color wheel</li>
              <li>Support</li>
              <li>Developers</li>
              <li>Resource library</li>
            </ul>
          </div>
        </div>
      </footer>





    </div>
  );
}

export default App;
