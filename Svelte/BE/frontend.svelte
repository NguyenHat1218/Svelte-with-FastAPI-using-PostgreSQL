<script>
    import { onMount } from 'svelte';
    import axios from 'axios';
  
    let dealsStatus = [];
  
    onMount(async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/dealsStatus');
        dealsStatus = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
  </script>
  
  <table>
    <tbody>
      {#each dealsStatus as item}
        <tr>
          <td>{item.name}</td>
          <td>{item.last_contacted}</td>
          <td>
            <img src={item.img} alt="" class="avatar-xs rounded-circle me-2 material-shadow" />
            <a href="#" class="text-body fw-medium">{item.sales}</a>
          </td>
          <td>
            <span class={'badge bg-' + item.badgeClass + '-subtle text-' + item.badgeClass + ' p-2'}>
              {item.status}
            </span>
          </td>
          <td>
            <div class="text-nowrap">{item.value}</div>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  
  <style>
    .avatar-xs {
      width: 30px;
      height: 30px;
    }
    .rounded-circle {
      border-radius: 50%;
    }
    .material-shadow {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .text-body {
      color: #000;
    }
    .fw-medium {
      font-weight: 500;
    }
    .badge {
      display: inline-block;
      padding: 0.25em 0.4em;
      font-size: 75%;
      font-weight: 700;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.25rem;
    }
    .text-nowrap {
      white-space: nowrap;
    }
  </style>
  