export const isValidCashAddressPayloadLength = (
    length
  ) =>
    (cashAddressLengthToSizeBits[length] | undefined) !== undefined;
