<script>
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
  
	let prompt = "";
	let chatHistory = writable([]);
  
	async function fetchResponse() {
	  const res = await fetch("http://localhost:8000/generate", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json"
		},
		body: JSON.stringify({ prompt })
	  });
	  const data = await res.json();
	  chatHistory.update(history => [...history, { user: prompt, bot: data.response }]);
	  prompt = "";
	}
  
	function handleSubmit() {
	  if (prompt.trim() !== "") {
		fetchResponse();
	  }
	}
  
	function handleNewChat() {
	  chatHistory.set([]);
	  prompt = "";
	}
  </script>
  
  <style>
	.container {
	  max-width: 800px;
	  margin: 0 auto;
	  padding: 1rem;
	  font-family: Arial, sans-serif;
	}
	.chatbox {
	  border: 1px solid #ddd;
	  padding: 1rem;
	  border-radius: 5px;
	  background-color: #f9f9f9;
	}
	.chat-item {
	  margin-bottom: 1rem;
	}
	.user {
	  font-weight: bold;
	  color: #007BFF;
	}
	.bot {
	  margin-left: 1rem;
	  font-style: italic;
	}
	.input-container {
	  display: flex;
	  margin-top: 1rem;
	}
	input[type="text"] {
	  flex: 1;
	  padding: 0.5rem;
	  border: 1px solid #ddd;
	  border-radius: 5px;
	}
	button {
	  padding: 0.5rem 1rem;
	  margin-left: 1rem;
	  border: none;
	  border-radius: 5px;
	  background-color: #007BFF;
	  color: white;
	  cursor: pointer;
	}
	.new-chat {
	  margin-top: 1rem;
	  background-color: #6c757d;
	}
  </style>
  
  <div class="container">
	<h1>GPT 4 PRO</h1>
	<div class="chatbox">
	  {#each $chatHistory as item}
		<div class="chat-item">
		  <div class="user">Hoi di: {item.user}</div>
		  <div class="bot">Cau tra loi ne: {item.bot}</div>
		</div>
	  {/each}
	</div>
	<div class="input-container">
	  <input type="text" bind:value={prompt} placeholder="Make a question" on:keypress="{(e) => e.key === 'Enter' && handleSubmit()}" />
	  <button on:click={handleSubmit}>Send</button>
	</div>
	<button class="new-chat" on:click={handleNewChat}>New Chat</button>
  </div>
  