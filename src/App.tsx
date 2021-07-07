import Header from './components/App/Header'
import Body from './components/App/Body'
import Footer from './components/App/Footer'

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex-grow flex flex-col">
        <div className="py-4 border-b bg-gray-100">
          <div className="container">
            <Header />
          </div>
        </div>
        <div className="flex-grow flex flex-col py-4 bg-gray-50">
          <div className="container">
            <Body />
          </div>
        </div>
      </div>
      <div className="py-4 border-t bg-gray-100 text-sm">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
