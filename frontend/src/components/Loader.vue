<template>
<div class="loader triangle">
    <svg viewBox="0 0 86 80">
        <polygon points="43 8 79 72 7 72"></polygon>
    </svg>
</div>
</template>

<style lang="scss">
.loader {
    --path: #f0f0f2;
    --dot: #bb5bbe;
    --duration: 3s;
    width: 44px;
    height: 44px;
    position: relative;
    &:before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        position: absolute;
        display: block;
        background: var(--dot);
        top: 37px;
        left: 19px;
        transform: translate(-18px, -18px);
        animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
    }
    svg {
        display: block;
        width: 100%;
        height: 100%;
        rect,
        polygon,
        circle {
            fill: none;
            stroke: var(--path);
            stroke-width: 10px;
            stroke-linejoin: round;
            stroke-linecap: round;
        }
        polygon {
            stroke-dasharray: 145 (221 - 145) 145 (221 - 145);
            stroke-dashoffset: 0;
            animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
    }
    &.triangle {
        width: 48px;
        &:before {
            left: 21px;
            transform: translate(-10px, -18px);
            animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
    }
}

@keyframes pathTriangle {
    33% {
        stroke-dashoffset: 74;
    }
    66% {
        stroke-dashoffset: 147;
    }
    100% {
        stroke-dashoffset: 221;
    }
}

@keyframes dotTriangle {
    33% {
        transform: translate(0, 0);
    }
    66% {
        transform: translate(10px, -18px);
    }
    100% {
        transform: translate(-10px, -18px);
    }
}

.loader {
    display: inline-block;
    margin: 0 16px;
}
</style>