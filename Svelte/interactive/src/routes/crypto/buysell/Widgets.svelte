<script>
	import cryptoData from "../../../common/data/cryptoPage";
	import { Card, CardBody, Col } from "sveltestrap";
	import Counter from "../../../Components/Common/CounterPage.svelte";
</script>

<Counter />

{#each cryptoData.buysellWidgets as item}
	<Col xl={3} sm={6}>
		<Card class="card-animate">
			<CardBody>
				<div class="d-flex">
					<div class="flex-grow-1">
						<h6 class="text-muted mb-3">{item.title}</h6>
						<h2 class="mb-0">
							$<span
								class="counter-value"
								data-target={item.counter}
							/><small class="text-muted fs-14">.{item.decimal}k</small>
						</h2>
					</div>
					<div class="flex-shrink-0 avatar-sm">
						<div
							class={"avatar-title fs-22 rounded bg-" +
								item.iconClass +
								"-subtle text-" +
								item.iconClass}
						>
							<i class={item.icon} />
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	</Col>
{/each}
