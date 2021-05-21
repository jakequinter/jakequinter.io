import Link from 'next/link';
import Image from 'next/image';
import { box } from '@/styles/box';
import { link as stylelink } from '@/styles/link';
import { text } from '@/styles/text';
import { image } from '@/styles/image';

export default function FoodCard({
  name,
  link,
  jakeRating,
  jenRating,
  imageUrl,
}) {
  return (
    <div
      className={box({
        padding: '$4',
        borderRadius: '5px',
        border: '1px solid $border',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      })}
    >
      <div className={box({ textAlign: 'center' })}>
        <Link href={link}>
          <a
            className={stylelink({ css: { fontSize: '$5', border: 'none' } })}
            target="_blank"
          >
            {name}
          </a>
        </Link>
        <div
          className={box({
            py: '$4',
            display: 'flex',
            justifyContent: 'space-around',
          })}
        >
          <div className={box({ display: 'flex', alignItems: 'center' })}>
            <Image
              height={50}
              width={50}
              src="/jakeAvi.png"
              alt="Jake avatar"
            />
            <p
              className={text({
                size: '3',
                css: { marginLeft: '$3' },
              })}
            >
              {jakeRating}
            </p>
          </div>
          <div className={box({ display: 'flex', alignItems: 'center' })}>
            <Image height={50} width={50} src="/jenAvi.png" alt="Jen avatar" />
            <p
              className={text({
                size: '3',
                css: { marginLeft: '$3' },
              })}
            >
              {jenRating}
            </p>
          </div>
        </div>
      </div>
      <div style={{ borderRadius: '10px' }}>
        <Image
          className={image()}
          src={imageUrl}
          alt="Jake Quinter"
          height={800}
          width={650}
          priority
        />
      </div>
    </div>
  );
}
