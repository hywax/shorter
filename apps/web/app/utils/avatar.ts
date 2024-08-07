export function getAvatarUrl(seed: string = 'Shorter'): string {
  return `https://api.dicebear.com/9.x/initials/svg?seed=${seed}&backgroundType=gradientLinear&fontFamily=Helvetica&fontSize=40`
}
