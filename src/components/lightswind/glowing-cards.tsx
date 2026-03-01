/*Ensure you had installed the package
or read our installation document. (go to lightswind.com/components/Installation)
npm i lightswind@latest*/

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

// Helper function to convert hex to rgba
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverEffect?: boolean;
  style?: React.CSSProperties;
}

export interface GlowingCardsProps {
  children: React.ReactNode;
  className?: string;
  /** Enable the glowing overlay effect */
  enableGlow?: boolean;
  /** Size of the glow effect radius */
  glowRadius?: number;
  /** Opacity of the glow effect */
  glowOpacity?: number;
  /** Animation duration for glow transitions */
  animationDuration?: number;
  /** Enable hover effects on individual cards */
  enableHover?: boolean;
  /** Gap between cards */
  gap?: string;
  /** Maximum width of cards container */
  maxWidth?: string;
  /** Padding around the container */
  padding?: string;
  /** Background color for the container */
  backgroundColor?: string;
  /** Border radius for cards */
  borderRadius?: string;
  /** Enable responsive layout */
  responsive?: boolean;
  /** Custom CSS variables for theming */
  customTheme?: {
    cardBg?: string;
    cardBorder?: string;
    textColor?: string;
    hoverBg?: string;
  };
}

export const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className,
  glowColor = "#3b82f6",
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "glowing-card-item",
        className
      )}
      style={{
        '--glow-color': glowColor,
        position: 'relative',
        flex: '1',
        minWidth: '14rem',
        padding: '1.5rem',
        borderRadius: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        color: '#333',
        transition: 'all 0.4s ease-out',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
};

export const GlowingCards: React.FC<GlowingCardsProps> = ({
  children,
  className,
  enableGlow = true,
  glowRadius = 25,
  glowOpacity = 1,
  animationDuration = 400,
  enableHover = true,
  gap = "2.5rem",
  maxWidth = "75rem",
  padding = "3rem 1.5rem",
  backgroundColor,
  borderRadius = "1rem",
  responsive = true,
  customTheme,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    if (!container || !overlay || !enableGlow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });
      setShowOverlay(true);

      // Using string concatenation for style properties
      overlay.style.setProperty('--x', x + 'px');
      overlay.style.setProperty('--y', y + 'px');
      overlay.style.setProperty('--glow-opacity', glowOpacity.toString());
    };

    const handleMouseLeave = () => {
      setShowOverlay(false);
      overlay.style.setProperty('--glow-opacity', '0');
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enableGlow, glowOpacity]);

  const containerStyle = {
    '--gap': gap,
    '--max-width': maxWidth,
    '--padding': padding,
    '--border-radius': borderRadius,
    '--animation-duration': animationDuration + 'ms', // Concatenation
    '--glow-radius': glowRadius + 'rem', // Concatenation
    '--glow-opacity': glowOpacity,
    backgroundColor: backgroundColor || undefined,
    ...customTheme,
  } as React.CSSProperties;

  return (
    <div
      className={cn("glowing-cards-container", className)}
      style={{
        ...containerStyle,
        position: 'relative',
        width: '100%',
      } as React.CSSProperties}
    >
      <div
        ref={containerRef}
        className="glowing-cards-wrapper"
        style={{
          position: 'relative',
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: 'var(--padding)',
        } as React.CSSProperties}
      >
        <div
          className={cn(
            "glowing-cards-inner",
            responsive && "glowing-cards-responsive"
          )}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 'var(--gap)',
          } as React.CSSProperties}
        >
          {children}
        </div>

        {enableGlow && (
          <div
            ref={overlayRef}
            className="glowing-cards-overlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
              userSelect: 'none',
              transition: `opacity var(--animation-duration)ms ease-out`,
              WebkitMask:
                "radial-gradient(var(--glow-radius) var(--glow-radius) at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)",
              mask:
                "radial-gradient(var(--glow-radius) var(--glow-radius) at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)",
              opacity: showOverlay ? glowOpacity : 0,
            } as React.CSSProperties}
          >
            <div
              className={cn(
                "glowing-cards-overlay-inner",
                responsive && "glowing-cards-responsive"
              )}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 'var(--gap)',
                maxWidth: 'var(--max-width)',
                margin: '0 auto',
                padding: 'var(--padding)',
              } as React.CSSProperties}
            >
              {React.Children.map(children, (child, index) => {
                if (React.isValidElement<GlowingCardProps>(child) && child.type === GlowingCard) {
                  const childProps = child.props as GlowingCardProps;
                  const cardGlowColor = childProps.glowColor || "#3b82f6";
                  const rgbaColor = hexToRgba(cardGlowColor, 0.15);
                  return React.cloneElement(child, {
                    className: cn(
                      childProps.className,
                      "glowing-card-overlay"
                    ),
                    style: {
                      ...(childProps.style || {}),
                      backgroundColor: rgbaColor,
                      borderColor: cardGlowColor,
                      boxShadow: `0 0 20px ${cardGlowColor}40, 0 0 40px ${cardGlowColor}30, inset 0 0 0 1px ${cardGlowColor}`,
                    },
                  });
                }
                return child;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { GlowingCards as default };