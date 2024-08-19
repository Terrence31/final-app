import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-8">Your Main App Content</h1>
      <div className="langflow">
      <langflow-chat
          window_title="Chatbot_cohere"
          flow_id="697fb9c8-9f17-46e2-b61d-819c5dd2be61"
          host_url="http://localhost:7860"
          chat_position="top-left"          
          height={500}
          width={300}
          chat_trigger_style='{ "background-size": "cover", "background-position": "center","backgroundColor":"yellow", "color":"black"}'
          chat_window_style='{"border": "2px solid black"}'  
        ></langflow-chat>
        </div>
    </div>
  );
}

export default App;
