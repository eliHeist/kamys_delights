<script lang="ts">
	import ItemsList from '$lib/components/itemsList.svelte';
    // class="w-full h-full"
	const list_items = [
		{
			title: 'Convenient Drop-off and Pick-up',
			body: null,
			points: [
				'We provide convenient drop-off and pick-up locations for your dry cleaning and laundry needs.',
				'Our streamlined process ensures quick turnaround time for your clothes.'
			],
			icon: `
                <svg class="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 12.5H17.5L18.75 15H2.5L1.25 12.5ZM2.91667 17.5H19.1667L20.4167 20H4.16667L2.91667 17.5ZM30 30.8334C31.3833 30.8334 32.5 29.7167 32.5 28.3334C32.5 26.95 31.3833 25.8334 30 25.8334C28.6167 25.8334 27.5 26.95 27.5 28.3334C27.5 29.7167 28.6167 30.8334 30 30.8334ZM32.5 15.8334H28.3333V20H35.7667L32.5 15.8334ZM13.3333 30.8334C14.7167 30.8334 15.8333 29.7167 15.8333 28.3334C15.8333 26.95 14.7167 25.8334 13.3333 25.8334C11.95 25.8334 10.8333 26.95 10.8333 28.3334C10.8333 29.7167 11.95 30.8334 13.3333 30.8334ZM33.3333 13.3334L38.3333 20V28.3334H35C35 31.1 32.7667 33.3334 30 33.3334C27.2333 33.3334 25 31.1 25 28.3334H18.3333C18.3333 31.1 16.0833 33.3334 13.3333 33.3334C10.5667 33.3334 8.33333 31.1 8.33333 28.3334H5V22.5H8.33333V25H9.6C10.5167 23.9834 11.85 23.3334 13.3333 23.3334C14.8167 23.3334 16.15 23.9834 17.0667 25H25V10H5C5 8.15002 6.48333 6.66669 8.33333 6.66669H28.3333V13.3334H33.3333Z" fill="#682F76"/>
                </svg>
            `
		},
		{
			title: 'Professional Cleaning',
			body: null,
			points: [
				'Our experienced staff utilizes industry-leading techniques and equipment to deliver high-quality dry cleaning and laundry services.',
				'We take special care to treat each garment with the utmost care and attention to detail.'
			],
			icon: `
                <svg class="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.4337 33.3334L23.117 6.35002C22.5003 4.95002 21.5503 3.81669 20.267 2.95002C19.0003 2.10002 17.5837 1.66669 16.017 1.66669C14.617 1.66669 13.3337 2.01669 12.167 2.71669C10.417 3.76669 10.067 4.36669 9.38366 5.53335C8.70033 6.70002 8.33366 8.00002 8.33366 9.40002L8.38366 15H3.38366V24.0834C4.41699 23.6167 5.51699 23.3834 6.66699 23.3834V18.3834H15.0003C15.9503 18.3834 16.7337 18.7167 17.3837 19.3667C18.0337 20 18.3337 20.7834 18.3337 21.6667V33.3834H14.8503C14.593 34.5856 14.0563 35.7104 13.2837 36.6667H21.667V21.6667C21.667 20.4667 21.3337 19.3667 20.7503 18.3334C20.167 17.3 19.3503 16.5167 18.3337 15.9334C17.367 15.3334 16.2503 15 15.0003 15H11.667V9.40002C11.667 8.20002 12.0837 7.18335 12.9337 6.31669C13.7837 5.45002 14.817 5.00002 16.017 5.00002C16.9003 5.00002 17.717 5.26669 18.4337 5.76669C19.1503 6.26669 19.6837 6.90002 20.0003 7.68335L30.767 33.3334L26.667 33.3834V36.6667H38.3337V33.3834L34.4337 33.3334ZM6.66699 30C7.58366 30 8.33366 30.75 8.33366 31.6667C8.33366 32.5834 7.58366 33.3334 6.66699 33.3334C5.75033 33.3334 5.00033 32.5834 5.00033 31.6667C5.00033 30.75 5.75033 30 6.66699 30ZM6.66699 26.6667C3.90033 26.6667 1.66699 28.9 1.66699 31.6667C1.66699 34.4334 3.90033 36.6667 6.66699 36.6667C9.43366 36.6667 11.667 34.4334 11.667 31.6667C11.667 28.9 9.43366 26.6667 6.66699 26.6667Z" fill="#682F76"/>
                </svg>
            `
		},
		{
			title: 'Various Services',
			body: null,
			points: [
				'We offer a variety of services, including dry cleaning, wet cleaning, and laundering for garments and household items.',
				'Our services cater to a wide range of materials and fabrics, ensuring optimal cleaning results.'
			],
			icon: `
                <svg class="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66667 18.3333H16.6667C17.1087 18.3333 17.5326 18.1577 17.8452 17.8452C18.1577 17.5326 18.3333 17.1087 18.3333 16.6667V6.66667C18.3333 6.22464 18.1577 5.80072 17.8452 5.48816C17.5326 5.17559 17.1087 5 16.6667 5H6.66667C6.22464 5 5.80072 5.17559 5.48816 5.48816C5.17559 5.80072 5 6.22464 5 6.66667V16.6667C5 17.1087 5.17559 17.5326 5.48816 17.8452C5.80072 18.1577 6.22464 18.3333 6.66667 18.3333ZM8.33333 8.33333H15V15H8.33333V8.33333ZM33.3333 5H23.3333C22.8913 5 22.4674 5.17559 22.1548 5.48816C21.8423 5.80072 21.6667 6.22464 21.6667 6.66667V16.6667C21.6667 17.1087 21.8423 17.5326 22.1548 17.8452C22.4674 18.1577 22.8913 18.3333 23.3333 18.3333H33.3333C33.7754 18.3333 34.1993 18.1577 34.5118 17.8452C34.8244 17.5326 35 17.1087 35 16.6667V6.66667C35 6.22464 34.8244 5.80072 34.5118 5.48816C34.1993 5.17559 33.7754 5 33.3333 5ZM31.6667 15H25V8.33333H31.6667V15ZM16.6667 35C17.1087 35 17.5326 34.8244 17.8452 34.5118C18.1577 34.1993 18.3333 33.7754 18.3333 33.3333V23.3333C18.3333 22.8913 18.1577 22.4674 17.8452 22.1548C17.5326 21.8423 17.1087 21.6667 16.6667 21.6667H6.66667C6.22464 21.6667 5.80072 21.8423 5.48816 22.1548C5.17559 22.4674 5 22.8913 5 23.3333V33.3333C5 33.7754 5.17559 34.1993 5.48816 34.5118C5.80072 34.8244 6.22464 35 6.66667 35H16.6667ZM8.33333 25H15V31.6667H8.33333V25ZM30 23.3333H26.6667V26.6667H23.3333V30H26.6667V33.3333H30V30H33.3333V26.6667H30V23.3333Z" fill="#682F76"/>
                </svg>
            `
		},
		{
			title: 'Specialized Treatments',
			body: null,
			points: [
				'We offer specialized treatments for delicate fabrics, stains, and odors to restore your garments to their original condition.',
				'Our team is trained to handle a variety of fabrics and garments, including formal wear, casual clothing, and household linens.'
			],
			icon: `
                <svg class="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.333 25C21.458 25 24.9997 21.5817 24.9997 13.3334C24.9997 21.5817 28.5163 25 36.6663 25C28.5163 25 24.9997 28.5167 24.9997 36.6667C24.9997 28.5167 21.458 25 13.333 25ZM3.33301 10.8334C8.55634 10.8334 10.833 8.63671 10.833 3.33337C10.833 8.63671 13.0947 10.8334 18.333 10.8334C13.0947 10.8334 10.833 13.095 10.833 18.3334C10.833 13.095 8.55634 10.8334 3.33301 10.8334Z" stroke="#682F76" stroke-width="2.5" stroke-linejoin="round"/>
                </svg>
            `
		},
		{
			title: 'Quality Assurance',
			body: null,
			points: [
				'We prioritize quality and customer satisfaction, ensuring that every garment is thoroughly inspected before being returned to you.',
				'Our commitment to excellence means that you can trust us to deliver consistently superior results with every service.'
			],
			icon: `
                <svg class="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.7831 28.75L30.2665 20.95C31.1907 19.2525 31.6722 17.3495 31.6665 15.4167C31.6665 12.3225 30.4373 9.35501 28.2494 7.16709C26.0615 4.97916 23.094 3.75 19.9998 3.75C16.9056 3.75 13.9381 4.97916 11.7502 7.16709C9.56229 9.35501 8.33313 12.3225 8.33313 15.4167C8.32739 17.3495 8.80889 19.2525 9.73313 20.95L5.21646 28.75C5.0699 29.0039 4.99288 29.2919 4.99316 29.585C4.99345 29.8781 5.07105 30.166 5.21811 30.4195C5.36518 30.6731 5.57652 30.8834 5.83081 31.0292C6.08509 31.175 6.37334 31.2512 6.66646 31.25H11.4498L13.8831 35.35C13.9652 35.4859 14.0662 35.6094 14.1831 35.7167C14.4921 36.0145 14.904 36.1816 15.3331 36.1833H15.5665C15.8181 36.1489 16.0585 36.0574 16.2694 35.9159C16.4802 35.7743 16.656 35.5865 16.7831 35.3667L19.9998 29.8333L23.2165 35.4167C23.3455 35.6334 23.5221 35.818 23.7328 35.9566C23.9436 36.0951 24.183 36.1841 24.4331 36.2167H24.6665C25.1013 36.2193 25.52 36.0518 25.8331 35.75C25.9452 35.6488 26.0408 35.5307 26.1165 35.4L28.5498 31.3H33.3331C33.6268 31.3012 33.9156 31.2247 34.1702 31.0784C34.4248 30.932 34.6363 30.721 34.7831 30.4667C34.9389 30.2074 35.0211 29.9107 35.0211 29.6083C35.0211 29.3059 34.9389 29.0092 34.7831 28.75ZM15.3165 31.3L13.8331 28.8167C13.6871 28.5703 13.48 28.3657 13.2318 28.2227C12.9837 28.0796 12.7029 28.0029 12.4165 28H9.53313L11.9165 23.8667C13.5577 25.4481 15.6262 26.5142 17.8665 26.9333L15.3165 31.3ZM19.9998 23.75C18.3516 23.75 16.7405 23.2613 15.37 22.3456C13.9996 21.4299 12.9315 20.1284 12.3008 18.6057C11.6701 17.083 11.505 15.4074 11.8266 13.7909C12.1481 12.1744 12.9418 10.6895 14.1072 9.52411C15.2727 8.35867 16.7575 7.565 18.374 7.24346C19.9906 6.92191 21.6661 7.08694 23.1888 7.71767C24.7115 8.3484 26.013 9.4165 26.9287 10.7869C27.8444 12.1573 28.3331 13.7685 28.3331 15.4167C28.3331 17.6268 27.4552 19.7464 25.8924 21.3092C24.3295 22.872 22.2099 23.75 19.9998 23.75ZM27.5831 28C27.2967 28.0029 27.0159 28.0796 26.7678 28.2227C26.5196 28.3657 26.3125 28.5703 26.1665 28.8167L24.6831 31.3L22.1498 26.8833C24.3823 26.4557 26.4431 25.3905 28.0831 23.8167L30.4665 27.95L27.5831 28Z" fill="#682F76"/>
                </svg>
            `
		},
		{
			title: 'Convenient Scheduling',
			body: null,
			points: [
				'We offer flexible scheduling options to accommodate your busy lifestyle.',
				'Whether you need a one-time service or regular maintenance, we can tailor our services to meet your needs.'
			],
			icon: `
                <svg class="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.9997 8.33337H4.99967C4.0792 8.33337 3.33301 9.07957 3.33301 10V31.6667C3.33301 32.5872 4.0792 33.3334 4.99967 33.3334H34.9997C35.9201 33.3334 36.6663 32.5872 36.6663 31.6667V10C36.6663 9.07957 35.9201 8.33337 34.9997 8.33337Z" stroke="#682F76" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.666 5V11.6667M20.8327 19.1667H11.666M28.3327 25.8333H11.666M28.3327 5V11.6667" stroke="#682F76" stroke-width="3.33333" stroke-linecap="round"/>
                </svg>
            `
		}
	];
</script>

<svelte:head>
    <title>Laundry services | Kamy's Delights</title>
</svelte:head>

<section class="hero relative pb-16 full-width">
	<div class="hidden lg:block relative h-80vh min-h-[60vh] xl:h-[90vh] max-w-[90%] mx-auto">
		<svg class="w-full h-full -z-10" viewBox="0 0 1256 880">
			<path
				d="M1194.9 120.136C1302.09 240.776 1260.3 474.272 1131.31 636.941C1003.22 799.61 787.022 890.674 595.347 878.999C403.672 867.324 235.615 752.911 123.881 598.804C12.1459 444.696 -43.2673 250.894 40.3067 142.707C124.789 33.7422 348.258 10.3926 588.988 2.60938C828.809 -5.95216 1086.8 0.274408 1194.9 120.136Z"
				fill="#682F76"
			/>
		</svg>
		<div class="absolute inset-0">
			<div class="grid justify-center gap-24 xl:gap-48 mt-16">
				<div class="text mt-8 grid grid-cols-2 gap-28 items-center">
					<div class="grid justify-end">
						<h2 class="text-white text-[4rem] font-bold w-fit" style="line-height: 1;">
							Laundry <br />Care
						</h2>
					</div>
					<p class="text-lg text-light mt-4 max-w-[20rem]">
						Kamy’s Delights offers a simplified approach to dry cleaning and laundry services.
					</p>
				</div>
				<figure class="">
					<img
						class="w-[60%] xl:w-[70%] mx-auto"
						src="/images/laundry_washer.webp"
						alt="Coffee on a coffee plate"
					/>
				</figure>
			</div>
		</div>
	</div>

	<div class="content-grid lg:hidden">
		<img
			class="w-full object-cover aspect-4/3 full-width max-h-[50vh]"
			src="/images/laundry_shelved.webp"
			alt="Edible arrangement"
		/>

		<div class="text mt-8">
			<h2 class="text-primary text-5xl font-bold">Laundry Care</h2>
			<p class="text-lg mt-4 max-w-[20rem]">
				Kamy’s Delights offers a simplified approach to dry cleaning and laundry services.
			</p>
		</div>
	</div>
</section>

<!-- points -->
<ItemsList {list_items} />

<style lang="scss">
	.parallax {
		overflow: hidden;
		display: grid;
		place-content: center;

		img {
			filter: brightness(0.5);
			position: absolute;
			height: 100%;
			width: 100%;
			object-fit: cover;
			z-index: -1;
		}
		/* background-image: url('/images/cookies.webp');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            z-index: -1;
        } */
	}
</style>
