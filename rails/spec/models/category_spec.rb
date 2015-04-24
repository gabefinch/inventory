require 'rails_helper'

describe Category do
  it { should have_many :ingredients }
  it { should belong_to :parent }
  it { should have_many :children }
  it { should validate_presence_of :name }
  describe('.top_level') do
    it('returns array of all parentless categories') do
      vegetables = Category.create(name: 'Vegetable')
      proteins = Category.create(name: 'Proteins')
      meat = Category.create(name: 'Meat', parent_id: proteins.id)
      expect(Category.top_level).to eq([vegetables, proteins])
    end
  end
  describe('#descendents') do
    it('returns descendents of a category') do
      proteins = Category.create(name: 'Proteins')
      meat = Category.create(name: 'Meat', parent_id: proteins.id)
      chicken = Category.create(name: 'Chicken', parent_id: meat.id)
      expect(proteins.descendents).to eq([meat, chicken])
    end
    it('returns empty array for childless') do
      proteins = Category.create(name: 'Proteins')
      expect(proteins.descendents).to eq([])
    end
  end
  describe('#self_and_descendents') do
    it('returns self and descendents of a category') do
      proteins = Category.create(name: 'Proteins')
      meat = Category.create(name: 'Meat', parent_id: proteins.id)
      chicken = Category.create(name: 'Chicken', parent_id: meat.id)
      expect(proteins.self_and_descendents).to eq([proteins, meat, chicken])
    end
    it('returns array of self only for a childless category') do
      proteins = Category.create(name: 'Proteins')
      expect(proteins.descendents).to eq([])
    end
  end
  describe('#children') do
    it('returns children of a category') do
      proteins = Category.create(name: 'Proteins')
      meat = Category.create(name: 'Meat', parent_id: proteins.id)
      expect(proteins.children).to eq([meat])
    end
    it('returns empty array for childless') do
      proteins = Category.create(name: 'Proteins')
      expect(proteins.children).to eq([])
    end
  end
  describe('#children?') do
    it('returns true for category w/ children') do
      proteins = Category.create(name: 'Proteins')
      meat = Category.create(name: 'Meat', parent_id: proteins.id)
      expect(proteins.children?).to eq(true)
    end
    it('returns false for childless category') do
      proteins = Category.create(name: 'Proteins')
      expect(proteins.children?).to eq(false)
    end
  end
  describe('#parent') do
    it('returns parent for category w/ parent') do
      proteins = Category.create(name: 'Proteins')
      meat = Category.create(name: 'Meat', parent_id: proteins.id)
      expect(meat.parent).to eq(proteins)
    end
    it('returns nil for parentless category') do
      proteins = Category.create(name: 'Proteins')
      expect(proteins.parent).to eq(nil)
    end
  end
  describe('#parent?') do
    it('returns true for category w/ parent') do
      proteins = Category.create(name: 'Proteins')
      meat = Category.create(name: 'Meat', parent_id: proteins.id)
      expect(meat.parent?).to eq(true)
    end
    it('returns false for parentless category') do
      proteins = Category.create(name: 'Proteins')
      expect(proteins.parent?).to eq(false)
    end
  end
end
