import React from 'react';
import Link from 'next/link'
import { Flex, Card, Image } from 'antd';
import { FALLBACK } from '../../concon/image-fallback';
import { motion } from "framer-motion"

const BackToTheFuture = ({
  notable,
}: {
  notable: { id: number, name: string, description: string, gmap: string}[],
}) => {
  return (
    <>
      <Flex wrap="wrap" gap="large" justify="space-evenly" className='overflow-scroll h-96 mb-12'>
        { notable.map((item: { id: number, name: string, description: string, gmap: string}) =>
          <Card
            style={{ width: 300 }}
            className="object-cover animate-fadeIn"
            key={item.id}
            cover={
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  width={"100%"}
                  height={200}
                  className="object-cover"
                  alt="restaurant image"
                  src={`https://pub-c69f8d48b1ef401e8d4f42c1fa6deca7.r2.dev/test%2F${item.id}.png`}
                  fallback={FALLBACK}
                />
              </motion.div>
            }
          >
            <Link href={`/restaurants/${item.id}`} rel="noopener noreferrer" target="_blank">
              <p className="text-base font-bold" style={{ color: "#000" }}>{item.name}</p>
              <p className="text-ellipsis line-clamp-3" style={{ color: "#000" }}>{item.description}</p>
            </Link>
          </Card>
        )}
      </Flex>
    </>
  )
}

export default BackToTheFuture;
