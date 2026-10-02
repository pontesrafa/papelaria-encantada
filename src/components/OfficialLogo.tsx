import React from 'react';

interface OfficialLogoProps {
  className?: string;
  size?: number | string;
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({ className = 'w-28 h-28 sm:w-32 sm:h-32', size }) => {
  return (
    <div 
      className={`relative rounded-full overflow-hidden shrink-0 select-none ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          {/* Gradients for authentic depth */}
          <linearGradient id="bgGrad" x1="250" y1="20" x2="250" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF2F6" />
            <stop offset="1" stopColor="#FFE0EA" />
          </linearGradient>

          <linearGradient id="ringGrad" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF1E7A" />
            <stop offset="0.5" stopColor="#FF0066" />
            <stop offset="1" stopColor="#E6005C" />
          </linearGradient>

          <linearGradient id="boxGrad" x1="250" y1="130" x2="250" y2="245" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFB3CD" />
            <stop offset="1" stopColor="#FF94B8" />
          </linearGradient>

          <linearGradient id="bowGrad" x1="250" y1="60" x2="250" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF2E82" />
            <stop offset="0.4" stopColor="#FF0066" />
            <stop offset="1" stopColor="#D90052" />
          </linearGradient>

          <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#FF0066" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Circular Rings */}
        <circle cx="250" cy="250" r="236" fill="url(#ringGrad)" />
        <circle cx="250" cy="250" r="218" fill="#FFFFFF" />
        <circle cx="250" cy="250" r="208" fill="url(#bgGrad)" />

        {/* Delicate Star & Sparkle Accents on Background */}
        <path d="M120 180 L122 173 L129 171 L122 169 L120 162 L118 169 L111 171 L118 173 Z" fill="#FFFFFF" opacity="0.8" />
        <path d="M380 150 L382 144 L388 142 L382 140 L380 134 L378 140 L372 142 L378 144 Z" fill="#FFFFFF" opacity="0.8" />
        <path d="M370 230 L371 226 L375 225 L371 224 L370 220 L369 224 L365 225 L369 226 Z" fill="#FFFFFF" opacity="0.7" />

        {/* Confetti & Droplets */}
        {/* Yellow Droplet Left */}
        <path d="M142 120 C135 128 135 142 148 148 C158 152 163 138 156 126 C152 118 146 114 142 120 Z" fill="#FFB703" />
        {/* Yellow Droplet Right */}
        <path d="M362 128 C372 135 372 150 358 158 C348 163 342 150 348 136 C352 128 358 123 362 128 Z" fill="#FFB703" />
        {/* Cyan Droplet Left */}
        <path d="M145 195 C140 198 148 210 162 212 C172 213 174 205 168 198 C160 192 148 192 145 195 Z" fill="#00D2FF" />
        {/* Cyan Droplet Right */}
        <path d="M360 216 C364 212 355 200 340 198 C330 197 328 206 334 213 C342 219 356 220 360 216 Z" fill="#00D2FF" />
        {/* Pink Confetti Droplets */}
        <path d="M336 182 C342 188 353 194 358 186 C363 178 350 172 342 174 C337 175 333 178 336 182 Z" fill="#FF4D8D" />
        {/* Left Pink Heart */}
        <path d="M130 155 C122 145 106 150 106 162 C106 174 124 186 134 190 C144 186 162 174 162 162 C162 150 146 145 138 155 L134 160 Z" fill="#FF1E7A" transform="rotate(-15 134 170) scale(0.65)" />
        {/* Right Purple Heart */}
        <path d="M365 165 C357 155 341 160 341 172 C341 184 359 196 369 200 C379 196 397 184 397 172 C397 160 381 155 373 165 L369 170 Z" fill="#9C27B0" transform="rotate(15 369 180) scale(0.65)" />

        {/* Gift Box Body */}
        {/* Shadow */}
        <ellipse cx="250" cy="245" rx="72" ry="10" fill="#E699B5" opacity="0.5" />
        {/* Main Box Base */}
        <path d="M178 155 L322 155 L314 240 C313 244 309 247 305 247 L195 247 C191 247 187 244 186 240 Z" fill="url(#boxGrad)" stroke="#FFA0C0" strokeWidth="3" />
        {/* Gift Box Lid */}
        <rect x="168" y="132" width="164" height="26" rx="8" fill="#FFD0E0" stroke="#FF94B8" strokeWidth="3" />
        {/* Lid Highlight */}
        <rect x="174" y="135" width="152" height="6" rx="3" fill="#FFFFFF" opacity="0.6" />

        {/* Heart on Gift Box */}
        <path d="M250 186 C245 178 232 181 232 192 C232 203 246 213 250 216 C254 213 268 203 268 192 C268 181 255 178 250 186 Z" fill="#FF0066" filter="url(#softGlow)" />

        {/* Big Luxury Bow */}
        {/* Left Bow Loop */}
        <path d="M245 125 C210 115 170 85 185 68 C205 50 238 88 248 116 Z" fill="url(#bowGrad)" stroke="#E6005C" strokeWidth="2.5" />
        <path d="M210 75 C222 82 235 98 242 114" stroke="#FFA3C8" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        {/* Right Bow Loop */}
        <path d="M255 125 C290 115 330 85 315 68 C295 50 262 88 252 116 Z" fill="url(#bowGrad)" stroke="#E6005C" strokeWidth="2.5" />
        <path d="M290 75 C278 82 265 98 258 114" stroke="#FFA3C8" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        {/* Center Bow Knot */}
        <ellipse cx="250" cy="124" rx="14" ry="12" fill="#FF0066" stroke="#D90052" strokeWidth="2.5" />
        <circle cx="248" cy="120" r="4" fill="#FFFFFF" opacity="0.7" />

        {/* Radiating Accent Dashes (Left & Right of Text) */}
        {/* Left Dashes */}
        <path d="M68 265 C72 260 88 266 84 274" stroke="#FF0066" strokeWidth="6" strokeLinecap="round" />
        <path d="M62 300 C68 296 85 304 80 312" stroke="#FF0066" strokeWidth="6" strokeLinecap="round" />
        <path d="M78 335 C84 329 98 339 92 346" stroke="#FF0066" strokeWidth="6" strokeLinecap="round" />
        {/* Right Dashes */}
        <path d="M432 265 C428 260 412 266 416 274" stroke="#FF0066" strokeWidth="6" strokeLinecap="round" />
        <path d="M438 300 C432 296 415 304 420 312" stroke="#FF0066" strokeWidth="6" strokeLinecap="round" />
        <path d="M422 335 C416 329 402 339 408 346" stroke="#FF0066" strokeWidth="6" strokeLinecap="round" />

        {/* Wordmark 1: "Papelaria" in Chocolate Brown */}
        <g filter="url(#softGlow)">
          <text
            x="250"
            y="318"
            textAnchor="middle"
            fill="#3B1C14"
            fontFamily="'Fredoka', 'Pacifico', cursive, sans-serif"
            fontWeight="700"
            fontSize="78"
            letterSpacing="-1"
            stroke="#FFFFFF"
            strokeWidth="8"
            paintOrder="stroke fill"
          >
            Papelaria
          </text>
        </g>
        {/* Heart dot over the 'i' in Papelaria */}
        <path
          d="M236 250 C233 246 226 248 226 253 C226 258 234 263 236 265 C238 263 246 258 246 253 C246 248 239 246 236 250 Z"
          fill="#FF0066"
        />

        {/* Wordmark 2: "Encantada" in Vibrant Magenta Pink */}
        <g filter="url(#softGlow)">
          <text
            x="250"
            y="390"
            textAnchor="middle"
            fill="#FF0066"
            fontFamily="'Fredoka', 'Pacifico', cursive, sans-serif"
            fontWeight="700"
            fontSize="74"
            letterSpacing="-0.5"
            stroke="#FFFFFF"
            strokeWidth="9"
            paintOrder="stroke fill"
          >
            Encantada
          </text>
        </g>

        {/* Swoosh Underline Ending in a Heart */}
        <path
          d="M142 418 Q250 382 352 400"
          stroke="#FF0066"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        {/* Heart at the end of the Swoosh */}
        <path
          d="M366 388 C362 383 353 385 353 392 C353 398 363 405 366 408 C369 405 379 398 379 392 C379 385 370 383 366 388 Z"
          fill="#FF0066"
          transform="rotate(25 366 398)"
        />
      </svg>
    </div>
  );
};
