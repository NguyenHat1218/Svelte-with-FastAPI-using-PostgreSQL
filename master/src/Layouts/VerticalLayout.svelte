<script>
    import { onMount } from "svelte";
    import { _ } from "svelte-i18n";
    import { page } from "$app/stores";

    let navData = [];
    let current = "";
    let currentSub = "";
    // let currentPath = "/#"

    async function fetchData() {
        try {
            const response = await fetch('http://127.0.0.1:8000/samplemenu/');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            navData = transformData(data);
            console.log('navData:', navData);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function transformData(data) {
        const menuMap = new Map();
        data.forEach(item => {
            item.subItems = [];
            menuMap.set(item.menu_id, item);
        });

        const menuTree = [];
        menuMap.forEach(item => {
            if (item.menu_level === 1) {
                menuTree.push(item);
            } else {
                const parent = menuMap.get(item.parent_menu_id);
                if (parent) {
                    parent.subItems.push(item);
                }
            }
        });

        return menuTree;
    }

    onMount(async () => {
        await fetchData();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    function changeClassAttribute(menuId) {
        current = current === menuId ? "" : menuId;
    }

    function changeSubClassAttribute(menuId) {
        currentSub = currentSub === menuId ? "" : menuId;
    }

    function hasSubItems(item) {
        return item.subItems.length > 0;
    }
    
</script>

<svelte:head>
    <script src="//unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.min.js"></script>
</svelte:head>

<div id="navbar-nav" class="simplebar">
    <div class="main-menu">
        {#each navData as item}
            {#if item.menu_level === 1}
                <div class="menu-title"><span>{$_(item.menu_name)}</span></div>
                {#each item.subItems as subItem}
                    {#if hasSubItems(subItem)}
                        <div class="nav-item">
                            <span
                                class={current === subItem.menu_id ? "nav-link menu-link active" : "nav-link menu-link"}
                                data-bs-toggle="collapse"
                                aria-expanded={current === subItem.menu_id ? true : false}
                                on:click={() => changeClassAttribute(subItem.menu_id)}
                            >
                                <i class={subItem.icon} /> <span>{$_(subItem.menu_name)}</span>
                            </span>
                            <div class="nav nav-sm flex-column collapse {current === subItem.menu_id ? 'show' : ''}">
                                {#each subItem.subItems as subSubItem}
                                    <div class="nav-item">
                                        <a
                                            class={current === subSubItem.menu_id ? "nav-link menu-link active" : "nav-link menu-link"}
                                            href={subSubItem.program_cd ? subSubItem.program_cd : "#"} 
                                            on:click={() => changeClassAttribute(subSubItem.menu_id)}
                                        >
                                            <!-- <a
                                            class={current === subSubItem.menu_id ? "nav-link menu-link active" : "nav-link menu-link"}
                                            href={currentPath}
                                            on:click={() => {
                                                changeClassAttribute(subSubItem.menu_id);
                                                changeSubClassAttribute(subSubItem.program_cd);
                                            }}
                                        > -->
                                            <i class={subSubItem.icon} /> <span>{$_(subSubItem.menu_name)}</span>
                                        </a>
                                    </div>
                                {/each}
                                </div>
                        </div>
                    {:else}
                        <div class="nav-item">
                            <a
                                class={current === subItem.menu_id ? "nav-link menu-link active" : "nav-link menu-link"}
                                href={subItem.program_cd ? subItem.program_cd : "/#"} 
                                on:click={() => changeClassAttribute(subItem.menu_id)}
                            >
                                <i class={subItem.icon} /> <span>{$_(subItem.menu_name)}</span>
                            </a>
                        </div>
                    {/if}
                {/each}
            {:else}
                <div class="nav-item">
                    <a class={current === item.menu_id ? "nav-link menu-link active" : "nav-link menu-link"} href={item.program_cd ? item.program_cd : "/#"} 
                    on:click={() => changeClassAttribute(item.menu_id)}>
                        <i class={item.icon} /> <span>{$_(item.menu_name)}</span>
                    </a>
                </div>
            {/if}
        {/each}
    </div>
</div>
<!-- <style>
    #navbar-nav{
        float: left;
        margin-left: auto;
    }
</style> -->