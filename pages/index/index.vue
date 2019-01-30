<template>
	<view class="container">
		<!-- Populer recommand card-->
		<view class="card1">
			<view class="rec">
				<image class="recpic" src="../../static/assets/images1.jpg" mode=""></image>
				<text class="cardtitle">#Titletitletitletitletitle</text>
			</view>
			<view class="directorid">
				<view class="nickname">
					<image class="namepic" src="../../static/icons/logo.png" mode=""></image>
					<text class="namew">#Name</text>
					<view class="follow">
						<!-- 	<image class="followicon" src="../../static/icons/follow.png" mode=""></image>
						<text class="fword">Follow</text> -->
						<button class="btn">Follow</button>
					</view>
				</view>
				<view class="action">
					<image class="comment" src="../../static/icons/comment.png" mode=""></image>
					<image class="like" src="../../static/icons/like.png" mode=""></image>
					<image class="more" src="../../static/icons/more.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="card2">
			<view class="rec">
				<image class="recpic" src="../../static/assets/images1.jpg" mode=""></image>
				<text class="cardtitle">#Titletitletitletitletitle</text>
			</view>
			<view class="directorid">
				<view class="nickname">
					<image class="namepic" src="../../static/icons/logo.png" mode=""></image>
					<text class="namew">#Name</text>
					<view class="follow">
						<!-- 	<image class="followicon" src="../../static/icons/follow.png" mode=""></image>
						<text class="fword">Follow</text> -->
						<button class="btn">Follow</button>
					</view>
				</view>
				<view class="action">
					<image class="comment" src="../../static/icons/comment.png" mode=""></image>
					<image class="like" src="../../static/icons/like.png" mode=""></image>
					<image class="more" src="../../static/icons/more.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="card2">
			<view class="rec">
				<image class="recpic" src="../../static/assets/images1.jpg" mode=""></image>
				<text class="cardtitle">#Titletitletitletitletitle</text>
			</view>
			<view class="directorid">
				<view class="nickname">
					<image class="namepic" src="../../static/icons/logo.png" mode=""></image>
					<text class="namew">#Name</text>
					<view class="follow">
						<!-- 	<image class="followicon" src="../../static/icons/follow.png" mode=""></image>
						<text class="fword">Follow</text> -->
						<button class="btn">Follow</button>
					</view>
				</view>
				<view class="action">
					<image class="comment" src="../../static/icons/comment.png" mode=""></image>
					<image class="like" src="../../static/icons/like.png" mode=""></image>
					<image class="more" src="../../static/icons/more.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="card2">
			<view class="rec">
				<image class="recpic" src="../../static/assets/images1.jpg" mode=""></image>
				<text class="cardtitle">#Titletitletitletitletitle</text>
			</view>
			<view class="directorid">
				<view class="nickname">
					<image class="namepic" src="../../static/icons/logo.png" mode=""></image>
					<text class="namew">#Name</text>
					<view class="follow">
						<!-- 	<image class="followicon" src="../../static/icons/follow.png" mode=""></image>
						<text class="fword">Follow</text> -->
						<button class="btn">Follow</button>
					</view>
				</view>
				<view class="action">
					<image class="comment" src="../../static/icons/comment.png" mode=""></image>
					<image class="like" src="../../static/icons/like.png" mode=""></image>
					<image class="more" src="../../static/icons/more.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 500,
				circular: true
			}
		},

		changeIndicatorDots(e) {
			this.indicatorDots = !this.indicatorDots
		},
		changeAutoplay(e) {
			this.autoplay = !this.autoplay
		},
		intervalChange(e) {
			this.interval = e.target.value
		},
		durationChange(e) {
			this.duration = e.target.value
		},

		onLoad: function() {
			uni.setNavigationBarTitle({
				title: "Today's best films"
			});

		}
	}
</script>

<style>
	page {
		height: 220%;
		width: 100%;
	}

	.card1 {
		height: 640upx;
		width: 95%;
		align-items: center;
		background-color: white;
		margin: 0upx 20upx;
		border-radius: 20upx;
		box-shadow: 0upx 10upx 3upx 10upx #C0C0C0;
	}
	
	.card2 {
		height: 640upx;
		width: 95%;
		align-items: center;
		background-color: white;
		margin: 50upx 20upx;
		border-radius: 20upx;
		box-shadow: 0upx 10upx 3upx 10upx #C0C0C0;
	}

	.directorid {
		display: flex;
		height: 80upx;
		width: 80upx;
	}

	.nickname {
		display: flex;
	}

	.follow {
		display: flex;
	}

	.namepic {
		height: 80upx;
		width: 80upx;
		border: 2upx solid #707070;
		border-radius: 100upx;
		margin-left: 20upx;
	}

	.namew {
		margin-top: 10upx;
		margin-left: 20upx;
		margin-right: 20upx;
	}

	.comment {
		height: 50upx;
		width: 50upx;
		margin: 0upx 20upx;
		margin-left: 100upx;
	}

	.like {
		height: 50upx;
		width: 50upx;
		margin: 0upx 20upx;

	}

	.more {
		height: 50upx;
		width: 50upx;
		margin: 0upx 20upx;
	}

	.btn {
		font-size: x-small;
		height: 50upx;
		width: 100upx;
		justify-content: center;
		align-items: center;
		margin-top: 20upx;
	}

	.fword {
		font-size: xx-small;
		color: black;
		position: fixed;
		margin-left: 10upx;
	}

	.followicon {
		height: 40upx;
		width: 40upx;
		position: fixed;
		padding-left: 10upx;
	}

	.action {
		display: flex;
		margin-top: 20upx;
	}

	.rec {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.recpic {
		margin-top: 7upx;
		height: 400upx;
		width: 700upx;
		margin-left: 10upx;
		margin-right: 10upx;
	}

	.cardtitle {
		font-size: large;
		color: black;
		margin: 40upx 50upx;
		margin-left: 50upx;
		margin-right: 50upx;
	}

	.container {
		height: 100%;
		background-color: black;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.t1 {
		color: white;
	}
</style>
